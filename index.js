const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const productsRoute = require("./src/router/products.js");
const userRoute = require("./src/router/users.js");
const cartRoute = require("./src/router/cart.js");

app.use("/products", productsRoute);
app.use("/cart", cartRoute);
app.use("/user", userRoute);
app.get("/", (req, res) => {
  res.send("API is Running");
});

app.listen(PORT, () => {
  console.log("Running in PORT: " + PORT);
});
