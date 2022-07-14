const mongoose = require("mongoose");
const CONFIG = require("dotenv").config().parsed;
const autoIncrement = require("mongoose-auto-increment");

mongoose.Promise = global.Promise;

exports.mongoose = mongoose;
exports.autoIncrementPlugin = autoIncrement.plugin;

exports.connect = () => {
  // 连接数据库
  mongoose.connect(
    `mongodb://${CONFIG.DB}:${CONFIG.DB_PASSWORD}@localhost:27017/${CONFIG.DB}`
  );

  // 连接错误
  mongoose.connection.on("error", (err) => {
    console.warn("数据库连接失败", err);
  });

  // 连接成功
  mongoose.connection.on("open", () => {
    console.log("数据库连接成功");
  });

  // return 实例
  return mongoose;
};

// 自增id初始化
autoIncrement.initialize(mongoose.connection);
