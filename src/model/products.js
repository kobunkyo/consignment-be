const prisma = require("../db/db.js");

const findProducts = async () => {
  const products = await prisma.product.findMany();
  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return product;
};

const findProductByString = async (keyword) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          name: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        {
          category: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: keyword,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  return products;
};

const updateQuantity = async (id, quantity) => {
  const product = await findProductById(id);
  if (product.quantity <= 0) {
    throw Error("Product out of stock");
  } else {
    product.quantity -= quantity;
    return product;
  }
};

const getProductCategory = async (category) => {
  const product = await prisma.product.findMany({
    where: {
      category: {
        equals: category,
        mode: "insensitive",
      },
    },
  });
  return product;
};

module.exports = {
  findProducts,
  findProductById,
  findProductByString,
  updateQuantity,
  getProductCategory,
};
