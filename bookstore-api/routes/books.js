const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.post("/", async (req, res) => {
  try {
    const { title, author, isbn, price, quantity } = req.body;

    // Custom validation
    if (!title || title.trim().length < 3) {
      return res.status(400).json({
        error: "Title must be at least 3 characters",
      });
    }

    if (!author) {
      return res.status(400).json({
        error: "Author is required",
      });
    }

    if (!isbn) {
      return res.status(400).json({
        error: "ISBN is required",
      });
    }

    if (price < 0) {
      return res.status(400).json({
        error: "Price must be positive",
      });
    }

    const book = new Book({
      title: title.trim(),
      author: author.trim(),
      isbn: isbn.trim(),
      price,
      quantity,
    });

    const savedBook = await book.save();

    res.status(201).json({
      message: "Book created successfully",
      data: savedBook,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        error: "ISBN already exists",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: error.message,
      });
    }

    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;