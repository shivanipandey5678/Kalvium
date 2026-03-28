require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

console.log("dotenv loaded successfully");
console.log("Server will start on port:", PORT);

app.get("/", (req, res) => {
  res.send("Environment Variables Working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});