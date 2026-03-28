const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/user.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");
const { roleMiddleware } = require("../middlewares/rbac.middleware");

router.get(
  "/users",
  authMiddleware,
  roleMiddleware("admin"),
  getUsers
);

module.exports = router;