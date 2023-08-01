/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const UnauthorizedError = require('../utils/errors/UnauthorizedError');

const extractBearerToken = (header) => header.replace('Bearer ', '');

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new UnauthorizedError('Ошибка авторизации.'));
  }
  const token = extractBearerToken(authorization);
  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return next(new UnauthorizedError('Ошибка авторизации.'));
  }

  req.user = payload;

  next();
};
module.exports = {
  authMiddleware,
};
