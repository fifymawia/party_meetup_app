const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');

    if (!decoded.user) {
      return res.status(401).send('UnAthorized');
    }

    // eslint-disable-next-line no-param-reassign
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).send('UnAthorized');
  }
};
