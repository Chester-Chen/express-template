const { mongoose } = require("../utils/db");
const User = require("../models/user");

const comment = {
  login: (req, res) => {
    res.cookie("test", '{name: "chester"}', { maxAge: 10000 });
    res.render("index", { title: "test" }, function (err, html) {
      res.send(html);
    });
  },
  logout: (req, res) => {
    res.end("logout success!");
  },
};

module.exports = comment;
