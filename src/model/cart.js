const prisma = require("../db/db.js");

const createNewCart = async (cartData) => {
  let id;
  let qty = 0;
  try {
    const cartID = await prisma.cart.findFirst({
      where: {
        AND: [{ userId: cartData.userId }, { productId: cartData.productId }],
      },
    });
    id = cartID.id;
    qty = cartID.quantity;
  } catch (e) {
    cartID = null;
  }

  if (id == null) {
    const cart = await prisma.cart.create({
      data: {
        userId: cartData.userId,
        productId: cartData.productId,
        quantity: parseInt(cartData.quantity),
      },
    });
    return cart;
  } else {
    const cart = await prisma.cart.update({
      where: {
        id: id,
      },
      data: {
        quantity: cartData.quantity + qty,
      },
    });
    return cart;
  }
};

const findCartByUID = async (userId) => {
  const carts = await prisma.cart.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      date: "desc",
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
