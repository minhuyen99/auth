const express = require('express');
const { registerUser, loginUser, getUser } = require('../controller/authController');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/', getUser);

module.exports = router;