const { ApolloError } = require('apollo-server-express');
const { INTERNAL_SERVER_ERROR } = require('../utils/errors');
const Post = require('./post.model');

const postResolver = {
  Query: {
    async getAllPost() {
      try {
        const posts = await Post.find({});
        return posts;
      } catch (err) {
        console.error(err);
        return new ApolloError(INTERNAL_SERVER_ERROR.message, INTERNAL_SERVER_ERROR.code, {
          error: true,
          message: INTERNAL_SERVER_ERROR.message,
        });
      }
    },
  },

  Mutation: {
    createPost: async (_, args, ctx, info) => {
      console.log('🚀 post.resolver-23-> ctx =>', ctx);
      const { author, title, category, content } = args.postInput;
      const post = new Post({ author, title, category, content });
      try {
        await post.save();
        return post;
      } catch (err) {
        console.error(err);
        return new ApolloError(INTERNAL_SERVER_ERROR.message, INTERNAL_SERVER_ERROR.code, {
          error: true,
          message: INTERNAL_SERVER_ERROR.message,
        });
      }
    },
  },
};

module.exports = postResolver;
