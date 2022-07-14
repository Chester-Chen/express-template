var express = require("express");

var router = express.Router();

const commentContrller = require("../controllers/comment");

router.get("/delete", (req, res) => {
  res.json({ msg: "delete" });
});

// 添加评论
router.get("/insert", commentContrller.addComment);

// 更新评论
router.get("/update", commentContrller.updateComment);

// 查评论
router.get("/query",commentContrller.getComment);

module.exports = router;
