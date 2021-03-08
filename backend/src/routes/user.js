const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, UserController.index);
router.post('/show', UserController.show);
router.post('/store', UserController.store);
router.put('/update', UserController.update);
router.delete('/delete', UserController.destroy);

module.exports = router;
