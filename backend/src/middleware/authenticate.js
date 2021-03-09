const { admin } = require('../utils/firebase-admin');

const authenticate = (req, res, next) => {
  let token = '';

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};

module.exports = authenticate;
