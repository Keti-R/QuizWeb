const express = require("express");
const { validationResult } = require("express-validator");
const prisma = require("../prisma");
const { UserSignUpValidator } = require("../validators/user");

const routes = express.Router();

routes.post("/signup", UserSignUpValidator, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const user = await prisma.user.create({ data: req.body });
  return res.json({ data: user });
});

routes.get("/", async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      password: true,
      firstName: true,
      lastName: true,
      age: true,
      posts: true,
    },
  });
  return res.json({ data: users });
});
router.get("/:id", async (req, res) => {
  const product = await prisma.Product.findUnique({ where: { id: req.body.id } });
  return res.json({ data: product });
});

router.post("/", async (req, res) => {
  const product = await prisma.Product.create({
      data:
      {
          name: req.body.name,
          price: req.body.price,
          amount: req.body.quantity
      },
  })
 });
 if (product.quantity == 0)
 return res.status(400).json(
    { data: null, error: "invalid" });

return res.json({ data: post });


module.exports = routes;
