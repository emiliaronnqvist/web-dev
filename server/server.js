const express = require("express");
const path = require("path");
const app = express();
const PORT = 3005;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, "../client")));

app.use("/", express.static("public"));

//Serve stores.json
app.get("/stores", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/assets/stores.json"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
