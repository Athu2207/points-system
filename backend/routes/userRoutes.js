const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  console.log("🔥 GET /api/users hit");
  const users = await User.find();
  res.json(users);
});

router.post('/', async (req, res) => {
  console.log("🔥 POST /api/users hit", req.body);
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

module.exports = router;
