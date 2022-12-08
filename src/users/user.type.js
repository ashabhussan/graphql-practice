const { gql } = require('apollo-server-express');

const userTypeDef = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  input signInInput {
    email: String!
    password: String!
  }

  input signUpInput {
    name: String
    email: String!
    password: String!
  }

  type Token {
    token: String!
  }

  type Query {
    signIn(input: signInInput): Token!
  }

  type Mutation {
    signUp(input: signUpInput): User!
  }
`;

module.exports = userTypeDef;
