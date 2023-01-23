const { gql } = require('apollo-server-express');

const postTypeDef = gql`
  type Post {
    id: ID!
    author: ID!
    title: String!
    category: String
    content: String!
  }

  type Query {
    getAllPost: [Post!]
  }

  input PostInput {
    author: ID!
    title: String!
    category: String
    content: String!
  }
  input DeleteInput{
  postId: ID!
  }

  type Mutation {
    createPost(postInput: PostInput): Post
    deletePost(postInput: DeleteInput): Post
  }
`;

module.exports = postTypeDef;
