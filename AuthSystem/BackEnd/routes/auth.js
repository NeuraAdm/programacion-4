const express = require('express');
const { login } = require('../controllers/authControllers')
const router = express.Router();

router.post("/auth/login", login);

module.exports = router;