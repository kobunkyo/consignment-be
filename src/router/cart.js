const express = require("express");

const router = express.Router();

const { newCart, getCartByUID, removeCart } = require("../controller/cart.js");

router.post("/add", async (req, res) => {
  try {
    const cartData = req.body;
    const addCart = await newCart(cartData);
    if (!addCart) {
      throw Error("Failed make a cart");
    } else {
      res.send(addCart);
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const UID = req.params.id;
    const carts = await getCartByUID(UID);
    if (!carts) {
      res.send("No Item");
    } else {
      res.send(carts);
    }
  } catch (error) {
    res.send(error.message);
  }
});

router.delete("/remove/:userId/:productId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    const cart = await removeCart(userId, productId);
    res.send(cart);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
