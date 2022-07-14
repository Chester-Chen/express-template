const { mongoose, autoIncrementPlugin } = require("../utils/db");

const { Schema } = mongoose;

// 评论模型
const commentSchema = new Schema({
  id: Number,
  // 评论所在文章id
  article_id: { type: Schema.Types.ObjectId, required: true },

  // 评论内容
  content: { type: String, required: true },

  // 是否置顶
  is_top: { type: Boolean, default: false },

  // 被赞数
  likes: { type: Number, default: 0 },

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now },
});

commentSchema.plugin(autoIncrementPlugin, {
  model: "test",
  field: "id",
  startAt: 0
});

module.exports = mongoose.model("test", commentSchema);
