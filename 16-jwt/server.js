const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const analyticsRoutes = require("./routes/analytics");
const songRoutes = require("./routes/songs");
const rateLimit = require("express-rate-limit");
dotenv.config();

const app = express();



const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // max 5 requests per IP
  message: "Too many requests, please try again later"
});

app.use(cors());
app.use(express.json());
app.use(limiter);

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api", songRoutes);

// MongoDB connection
mongoose.connect(process.env.DB_HOST)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});