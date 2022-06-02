const express = require("express");
const { validationResult } = require("express-validator");
const prisma = require("../client/prisma");
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

module.exports = routes;
