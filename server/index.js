const express = require("express");
const { getAsbisProducts } = require("./asbisFetcher");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api/products", async (req, res) => {
  try {
    const products = await getAsbisProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});