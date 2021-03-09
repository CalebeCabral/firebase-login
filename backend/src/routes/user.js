const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/authenticate');

router.get('/', UserController.index);
router.post('/show', UserController.show);
router.post('/store', authenticate, UserController.store);
router.put('/update', authenticate, UserController.update);
router.delete('/delete', authenticate, UserController.destroy);

module.exports = router;
