const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
// inisiasi controller
const produkController = require("./app/controllers/produkController");

// routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// produk
app.get("/produk", produkController.getAll);
app.get("/produk/:id", produkController.getById);
app.post("/produk", produkController.create);
app.put("/produk/:id", produkController.update);
app.delete("/produk/:id", produkController.delete);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
