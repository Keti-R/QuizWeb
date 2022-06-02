const express = require("express");
const prisma = require("../client/prisma");

const router = express.Router();


router.post("/", async (req, res) => {
  const user = await prisma.user.findUnique({ where: { id: 8 } });
  const post = await prisma.post.create({
    data: {
      name: req.body.name,
      UserId: user.id,
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
