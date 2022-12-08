const { ApolloError } = require('apollo-server-express');
const bcrypt = require('bcryptjs');
const { NOT_FOUND, UNPROCESSABLE_ENTITY } = require('../utils/errors');
const User = require('./user.model');
const userResolver = {
    Query: {
        async signIn(_, args, ctx, info) {
            const { email, password } = args.input;
            const user = await User.findOne({ email: email });
            if (!user) {
                return new ApolloError(NOT_FOUND.message, NOT_FOUND.code, {
                    error: true,
                    message: 'User not found',
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return new ApolloError(UNPROCESSABLE_ENTITY.message, UNPROCESSABLE_ENTITY.code, {
                    error: true,
                    message: 'Incorrect user or password',
                });
            }
            const access_token = user.generateJWTToken();
            return { token: access_token };
        },
    },

    Mutation: {
        async signUp(_, args, ctx, info) {
            let signUpInfo = args.input;

            signUpInfo.password = await bcrypt.hash(signUpInfo?.password, 10);

            try {
                const res = await User.create(signUpInfo);
                return res;
            } catch (err) {
                console.error(err);
                return new ApolloError(err.message, err.code, {
                    error: true,
                    message: err.message,
                });
            }
        },
    },
};

module.exports = userResolver;
