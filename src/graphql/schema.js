const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs');

const schema = {
  resolvers: resolvers,
  typeDefs: typeDefs,
};

module.exports = schema;
