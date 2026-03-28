require('dotenv').config();
const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI;

if (!DB_URI) {
  console.log("DB_URI not found!");
  process.exit(1);
}

mongoose.connect(DB_URI)
  .then(() => {
    console.log("Secure Connection Established to FinGuard Cluster");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Connection Error:", err.message);
    process.exit(1);
  });