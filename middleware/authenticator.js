// @desc Authenticates user
const auth = (req, res, next) => {
  if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'DELETE'
  ) {
    const token = req.headers['token'];
    if (!token) {
      return res
        .status(500)
        .json({ success: false, message: 'Not Authenticated' });
    }
  }
  next();
};

module.exports = auth;
