const express = require("express");
const userRouter = require("./routes/user");
const postRouter = require("./routes/posts");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const PORT = 8000;
const app = express();

app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");

app.get("/", (req, res) => {
  return res.json({ status: true });
});

app.listen(PORT, () => {
  console.log(`Sever is running on port ${PORT} 🚀`);
});
