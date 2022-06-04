const express = require("express");
const userRouter = require("./user");
const postRouter = require("./posts");
const productRouter = require("./product");
const orderRouter = require("./order");
const PORT = 8000;
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
const productRouter = require("./product");
const orderRouter = require("./order");

app.get("/", (req, res) => {
  return res.json({ status: true });
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT} 🚀`);
});
