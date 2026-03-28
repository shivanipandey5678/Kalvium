const User = require("../models/User");

exports.getUsers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5;

  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .select("-password"); // 🔥 VERY IMPORTANT

  res.json(users);
};