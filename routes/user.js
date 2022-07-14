var express = require("express");

var router = express.Router();

const UserContrller = require("../controllers/user");

router.get("/login", UserContrller.login);

router.get("/logout", UserContrller.logout);

module.exports = router;
