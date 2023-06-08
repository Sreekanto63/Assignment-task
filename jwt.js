const jwt = require('jsonwebtoken');

function generateToken(userId, secretKey12345) {
  const token = jwt.sign({ userId }, secretKey12345);
  return token;
}

module.exports = generateToken;
