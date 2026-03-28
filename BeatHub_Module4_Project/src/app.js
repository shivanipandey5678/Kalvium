const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

// middleware
app.use(express.json());
app.use(morgan("combined"));

// rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// routes
app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

module.exports = app;