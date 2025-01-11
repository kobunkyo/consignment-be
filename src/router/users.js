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

    if (
      validation.name == "" &&
      validation.username == "" &&
      validation.email == "" &&
      validation.password == ""
    ) {
      const user = await newUser(userData);
      res.send({
        data: user,
        message: "Berhasil",
      });
    } else {
      res.send(validation);
    }
  } catch (error) {
    res.send(error.message);
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
