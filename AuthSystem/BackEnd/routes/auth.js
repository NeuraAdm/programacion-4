const express = require('express');
const { login, register } = require('../controllers/authControllers')
const router = express.Router();

router.post("/auth/login", login);
router.post('/auth/register', register);

module.exports = router;