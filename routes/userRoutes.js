const express = require('express');
const loginController = require('../controller/userController');
const router = express.Router();

router.route('/login').post(loginController.login);
router.route('/register').post(loginController.register)

module.exports = router;