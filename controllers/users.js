const User = require('../models/User');

var userData = [
  {
    _id: '5d7a514b5d2c12c7449be042',
    name: 'Muhammad Abbas',
    address: 'Johar Town Lahore',
    phone: '12345567890',
    email: 'abbas@gmail.com',
    createdAt: '',
  },
];
// @desc Get all users
// @route GET /users
// @access private
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
  if (userData) {
    userData.push(req.body);
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
