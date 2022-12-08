const { merge } = require('lodash');
const postResolver = require('../posts/post.resolver');
const userResolver = require('../users/user.resolver');

const resolvers = merge([postResolver, userResolver]);

module.exports = resolvers;
