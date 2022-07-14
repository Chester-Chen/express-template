const { mongoose } = require("../utils/db");
const Comment = require("../models/comment");

const comment = {
  addComment: (req, res) => {
    let comment = new Comment({
      article_id: mongoose.Types.ObjectId(),
      content: "这是一条评论",
    });
    comment
      .save()
      .then((result) => {
        res.render("error", { message: "moximoxi" });
      })
      .catch((err) => console.log("err :>> ", err));
  },
  delComment: (req, res) => {},
  updateComment: (req, res) => {},
  getComment: (req, res) => {
    Comment.find({}, (err, result) => {
      if(err) {
        console.error('Error: ', err);
        return;
      }
      res.send(result)
    })
  },
};

module.exports = comment;
