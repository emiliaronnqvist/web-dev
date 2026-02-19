const express = require("express");
const app = express();
const PORT = 3005;

console.log("hello");

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
