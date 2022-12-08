const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../configs/env.config');

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Minimum Length of the email must be 5'],
        maxLength: 255,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1024,
    },
});

userSchema.methods.generateJWTToken = function () {
    const token = jwt.sign({ _id: this._id, email: this.email }, JWT_SECRET, {
        expiresIn: '7d',
    });
    return token;
};

module.exports = model('User', userSchema);
