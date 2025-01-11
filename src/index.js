const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const productsRoute = require("./router/products.js");
const userRoute = require("./router/users.js");
const cartRoute = require("./router/cart.js");

app.use("/products", productsRoute);
app.use("/cart", cartRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("Running in PORT: " + PORT);
});
