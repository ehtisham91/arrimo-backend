// @desc Authenticates user
const auth = (req, res, next) => {
  if (req.path === '/users/login') {
    req.headers['token'] = '123';
  }
  if (
    req.method === 'POST' ||
    req.method === 'PUT' ||
    req.method === 'DELETE'
  ) {
    const token = req.headers['token'];
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Not Authenticated' });
    }
  }
  next();
};

module.exports = auth;
