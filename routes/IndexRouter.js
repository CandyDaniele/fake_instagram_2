var express = require('express');
var router = express.Router();

const AuthController = require("../constrollers/AuthController");

router.get('/', AuthController.showLogin);
router.get('/registro',AuthController.showRegistro);
router.get('/home', AuthController.showHome);

module.exports = router;
