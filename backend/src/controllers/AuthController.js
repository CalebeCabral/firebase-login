const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const firebase = require('firebase/app');

// SignUp
const signUp = (req, res) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((data) => {
      newUser = new User({
        _id: data.user.uid,
        email: req.body.email,
        name: {
          first: req.body.name.first,
        },
      }).save();
      return data.user.getIdToken();
    })
    .then((token) => {
      res.status(201).json({ token });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

// SignIn
const signIn = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({
        error: err.code,
      });
    });
};

module.exports = { signUp, signIn };
