
const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();


router.post('/auth/signup', authController.signup);
module.exports = router;