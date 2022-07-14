const { mongoose, autoIncrementPlugin } = require("../utils/db");

const { Schema } = mongoose;

// 用户模型
const userSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true },

  // 评论内容
  name: { type: String, required: true },

  // 创建日期
  create_time: { type: Date, default: Date.now },

  // 最后修改日期
  update_time: { type: Date, default: Date.now },
});

userSchema.plugin(autoIncrementPlugin, {
  model: "User",
  field: "user_id",
  startAt: 0,
});

module.exports = mongoose.model("User", userSchema);
