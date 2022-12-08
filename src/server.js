require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { PORT, JWT_SECRET } = require('./configs/env.config');
const schema = require('./graphql/schema');
const jwt = require('jsonwebtoken');

const app = express();

const server = new ApolloServer({
  ...schema,
  context: async ({ req }) => {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      const userInfo = await jwt.verify(token, JWT_SECRET);
      return userInfo
    }
  },
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.info(`🚀 Server ready at http://localhost:${PORT}`);
});

module.exports = app;
