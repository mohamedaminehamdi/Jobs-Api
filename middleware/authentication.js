const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');

const auth = async (req, res, next) => {
    const authheader = req.headers.authorization;
    if (!authheader || !authheader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication invalid');
    }
const token = authheader.split(' ')[1];
try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // atach the user to the job route
    req.user = { userId: payload.userId, name: payload.name };
    next();
}
catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
}

};

module.exports = auth;
