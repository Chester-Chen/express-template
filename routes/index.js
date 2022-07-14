var express = require('express');
var router = express.Router();


// 用户路由
router.use('/api/user', require('./user'))

// 评论路由
router.use('/api/comment', require('./comment'))


module.exports = router;
