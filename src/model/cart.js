const prisma = require("../db/db.js");

const createNewCart = async (cartData) => {
  const cart = await prisma.cart.create({
    data: {
      userId: cartData.userId,
      productId: cartData.productId,
      quantity: parseInt(cartData.quantity),
    },
  });
  return cart;
};

const findCartByUID = async (userId) => {
  const carts = await prisma.cart.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      date: "desc",
    },
    include: {
      product: true,
    },
  });
  return carts;
};

const deleteCart = async (userId, productId) => {
  const cart = await prisma.cart.deleteMany({
    where: {
      AND: [{ userId: userId }, { productId: productId }],
    },
  });

  return "Successfull delete";
};

module.exports = {
  createNewCart,
  findCartByUID,
  deleteCart,
};
