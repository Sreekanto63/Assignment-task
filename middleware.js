const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, secretKey12345, (error, decoded) => {
    if (error) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Token is valid, proceed to the next middleware
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticate;
