const express = require("express");

const router = express.Router();

const {
  newUser,
  constrainValidation,
  userLogin,
} = require("../controller/users.js");

router.post("/signup", async (req, res) => {
  try {
    const userData = req.body;

    const validation = await constrainValidation(userData);
    // Not used
    // if (
    //   validation.name == "" &&
    //   validation.username == "" &&
    //   validation.email == "" &&
    //   validation.password == ""
    // ) {
    // } else {
    //   res.status(400).send(validation);
    // }
    const user = await newUser(userData);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = req.body;
    const data = await userLogin(user.email, user.password);

    res.send(data);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
