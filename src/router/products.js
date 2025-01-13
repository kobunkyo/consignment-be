const express = require("express");

const {
  getAllProducts,
  getProductById,
  getProductByKeyword,
  substractQuantity,
  getProductByCategory,
} = require("../controller/products.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get("/id/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    res.send(product);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get("/search/:keyword", async (req, res) => {
  try {
    const keyword = req.params.keyword;
    const products = await getProductByKeyword(keyword);
    res.send(products);
  } catch (e) {
    res.send(e.message);
  }
});

router.patch("/sub/:id/qty/:quantity", async (req, res) => {
  try {
    const id = req.params.id;
    const quantity = parseInt(req.params.quantity);

    const product = await substractQuantity(id, quantity);

    res.send({
      data: product,
      message: "Success",
    });
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const product = await getProductByCategory(category);
    res.send(product);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
