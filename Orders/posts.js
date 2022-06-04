const express = require("express");
const prisma = require("../prisma");

const router = express.Router();



router.post("/", async (req, res) => {
  const product = await prisma.Product.create({
    data:
    {
        userId: req.body.order.userId,
        itemId: req.body.order.product.id,
    },
});
  return res.json({ data: post });
});

router.get("/", async (req, res) => {
  const posts = await prisma.post.findMany({
    select: { product: true, User: true, id: true },
  });
  return res.json({ data: posts });
});

module.exports = router;
