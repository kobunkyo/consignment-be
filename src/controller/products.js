const {
  findProducts,
  findProductById,
  findProductByString,
  updateQuantity,
} = require("../model/products.js");

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

const getProductById = async (id) => {
  const product = await findProductById(id);
  if (!product) {
    throw Error("Product not found!");
  }
  return product;
};

const getProductByKeyword = async (keyword) => {
  if (typeof keyword !== "string") {
    throw Error("Keyword is not string");
  }

  const products = await findProductByString(keyword);

  if (!products) {
    throw Error("No product found");
  }

  return products;
};

const substractQuantity = async (id, quantity) => {
  const product = await updateQuantity(id, quantity);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByKeyword,
  substractQuantity,
};
