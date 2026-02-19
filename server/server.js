const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

// Basic route
app.get("/api/status", (req, res) => {
  res.json({ status: "API is running" });
});

// Import routes
// const venueRoutes = require('./routes/venues');
// app.use('/api/venues', venueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
