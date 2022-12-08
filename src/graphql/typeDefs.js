const { mergeTypeDefs } = require('@graphql-tools/merge');
const postTypeDef = require('../posts/post.type');
const userTypeDef = require('../users/user.type');

const typeDefs = mergeTypeDefs([postTypeDef, userTypeDef]);

module.exports = typeDefs;
