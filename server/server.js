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

//To show specific store pages Borde vi ändra och lägga in slug utan svenska tecken så urln blir /ahlens istället för /åhlens?
app.get("/stores/:id", (req, res) => {
  const id = req.params.id;
  const store = stores.find((store) => store.id === id);
  res.json(store);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
