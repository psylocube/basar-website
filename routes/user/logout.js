/**
 * @author Nikita Shevchenko
 * @description Route for logout page
 */
var express = require('express');
var router = express.Router();
var controller = require("../../controllers/logoutController");

router.get('/', controller.logOut);

module.exports = router;
