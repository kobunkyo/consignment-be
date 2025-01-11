const { user } = require("../db/db.js");
const { createUser, searchUsername, matchUser } = require("../model/users.js");

const newUser = async (userData) => {
  const user = await createUser(userData);
  return user;
};

const constrainValidation = async (userData) => {
  var validationMsg = {
    name: "",
    username: "",
    email: "",
    password: "",
  };

  const usernameRegex = /^[A-za-z0-9_\.]*$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).*$/;

  const isUsername = await searchUsername(userData.username);

  try {
    if (userData.name.length <= 3) {
      validationMsg.name = "Name is too short";
    }

    if (!passwordRegex.test(userData.password)) {
      validationMsg.password =
        "Password at least have 1 uppercase, 1 lowercase, 1 digit, and 1 special charater";
    } else {
      if (userData.password < 8) {
        validationMsg.password = "Password at least have 8 characters long";
      }
    }

    if (!emailRegex.test(userData.email)) {
      validationMsg.email = "Invalid email format";
    }

    if (isUsername) {
      validationMsg.username = "Username is available";
    } else {
      if (!usernameRegex.test(userData.username)) {
        validationMsg.username =
          "Username only contains alphabets, number/digit, and special character ( _ and . )";
      } else {
        if (userData.username.length < 3) {
          validationMsg.username = "Username at least 3 characters long";
        }
      }
    }
  } catch (error) {
    return error.message;
  }
  return validationMsg;
};

const userLogin = async (email, password) => {
  try {
    const data = await matchUser(email, password);
    return data;
  } catch (e) {
    throw Error(e.message);
  }
};

module.exports = {
  newUser,
  constrainValidation,
  userLogin,
};
