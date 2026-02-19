const express = require("express");
const router = express.Router();

// GET all venues
router.get("/", (req, res) => {
  // Placeholder response
  res.json([]);
});

// POST new venue
router.post("/", (req, res) => {
  res.status(201).json({ message: "Venue created" });
});

module.exports = router;
