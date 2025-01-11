const {
  createNewCart,
  findCartByUID,
  deleteCart,
} = require("../model/cart.js");

const newCart = async (cartData) => {
  const cart = await createNewCart(cartData);
  return cart;
};

const getCartByUID = async (userId) => {
  const carts = await findCartByUID(userId);
  return carts;
};

const removeCart = async (userId, productId) => {
  const cart = await deleteCart(userId, productId);
  return cart;
};

module.exports = {
  newCart,
  getCartByUID,
  removeCart,
};
