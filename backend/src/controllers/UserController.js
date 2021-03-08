const User = require('../models/User');

// List Users
const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

// Show single User
const show = (req, res, next) => {
  let userId = req.body.userId;
  User.findById(userId)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

// Add User
const store = (req, res, next) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then((response) => {
      res.json({
        message: 'User successfully added!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

// Update User
const update = (req, res, next) => {
  let userId = req.body.userId;

  let updatedData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  User.findByIdAndUpdate(userId, { $set: updatedData })
    .then((response) => {
      res.json({
        message: 'User successfully updated!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

// Delete User
const destroy = (req, res, next) => {
  let userId = req.body.userId;

  User.findByIdAndRemove(userId)
    .then((response) => {
      res.json({
        message: 'User successfully deleted!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
