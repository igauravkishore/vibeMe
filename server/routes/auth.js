const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { getToken } = require("../utils/help");

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, username } = req.body;
  
  const user = await User.findOne({ email: email });
  if (user) {
    return res.status(403).json({ error: "This user already exists" });
  }
  const hashpassWord = await bcrypt.hash(password, 10);
  const newUser = {
    email,
    password: hashpassWord,
    firstName,
    lastName,
    username,
  };
  const createUser = await User.create(newUser);

  const token = await getToken(email, createUser);
  const userReturn = { ...createUser.toJSON(), token };
  delete userReturn.password;
  return res.json(userReturn);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(403).json({ error: "Invalid credentials" });
  }

  const ispass = await bcrypt.compare(password, user.password);
  if (!ispass) {
    return res.status(403).json({ error: "Invalid Password" });
  }
  const token = await getToken(user.email, user);
  const userReturn = { ...user.toJSON(), token };
  delete userReturn.password;
  return res.json(userReturn);
});
module.exports = router;
