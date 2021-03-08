const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// SignUp
const signUp = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: await bcrypt.hash(req.body.password, 10),
  });

  user
    .save()
    .then((response) => {
      res.json({
        message: 'User successfully signed up!',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error has occurred!',
      });
    });
};

// SignIn
const signIn = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then(async (user) => {
    if (!user) {
      res.json({
        message: 'User not found.',
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      let token = jwt.sign({ email: user.email }, 'chaveSuperSecreta', {
        expiresIn: '1h',
      });
      res.json({
        message: 'User successfully signed in!',
        token,
      });
    } else {
      res.json({
        message: 'Password incorrect.',
      });
    }
  });
};

module.exports = { signUp, signIn };
