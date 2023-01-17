const User = require('../models/User');
const uuid = require('uuid');

var userData = [
  {
    _id: '5d7a514b5d2c12c7449be042',
    name: 'Muhammad Abbas',
    address: 'Johar Town Lahore',
    phone: '12345567890',
    email: 'abbas@gmail.com',
    createdAt: '',
  },
  {
    _id: '5d7a514b5d2c12c7449be043',
    name: 'Muhammad Bilal',
    address: 'Johar Town Lahore',
    phone: '090071231',
    email: 'bilal@gmail.com',
    createdAt: '',
  },
];
// @desc Get all users
// @route GET /users
// @access public
exports.getUsers = (req, res, next) => {
  if (userData) {
    res.status(200).json({ success: true, msg: userData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Get one users
// @route GET /users/:id
// @access private
exports.getUser = (req, res, next) => {
  const user = userData.find((user) => user._id === req.params.id);
  if (user) {
    res.status(200).json({ success: true, msg: userData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Create a new user
// @route POST /users/
// @access private
exports.createUser = (req, res, next) => {
  let userNew = req.body;
  userNew._id = uuid.v4();
  if (userData) {
    userData.push(userNew);
    res.status(200).json({ success: true, msg: userData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Update a user
// @route PUT /users/:id
// @access private
exports.updateUser = (req, res, next) => {
  let foundIndex = userData.findIndex((user) => user._id === req.params.id);
  userData[foundIndex] = {
    ...userData[foundIndex],
    ...req.body,
  };

  if (foundIndex !== -1) {
    res.status(200).json({ success: true, msg: userData });
  } else {
    res.status(400).json({ success: false });
  }
};

// @desc Delete a user
// @route Delete /users/:id
// @access private
exports.deleteUser = (req, res, next) => {
  const user = userData.find((user) => user._id === req.params.id);
  if (user) {
    const index = userData.indexOf(user);
    userData.splice(index);
    res.status(200).json({ success: true, msg: userData });
  } else {
    res.status(400).json({ success: false });
  }
};

exports.loginUser = (req, res, next) => {
  const email = 'admin@admin.com';
  const password = 'admin';
  if (req.body.email === email && req.body.password === password) {
    req.h;
    return res
      .status(200)
      .json({ name: 'admin', email: email, password: password });
  }
  return res.status(400).json({ message: 'Wrong email/password' });
};
