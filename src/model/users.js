const prisma = require("../db/db.js");

const createUser = async (userData) => {
  const user = await prisma.user.create({
    data: {
      name: userData.name,
      username: userData.username,
      email: userData.email,
      password: userData.password,
    },
  });
  return user;
};

const searchUsername = async (username) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    return userData;
  } catch (e) {
    return null;
  }
};

const matchUser = async (email, password) => {
  try {
    const userData = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!userData) {
      throw Error("No user found");
    } else {
      if (password !== userData.password) {
        throw Error("Wrong password");
      }
    }
    const data = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      username: userData.username,
    };

    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = {
  createUser,
  searchUsername,
  matchUser,
};
