const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const AuthController = require('../controllers/AuthController');

router.post('/signup', AuthController.signUp);
router.post('/signin', AuthController.signIn);
router.get('/profile', authenticate, AuthController.authenticatedUser);

module.exports = router;
