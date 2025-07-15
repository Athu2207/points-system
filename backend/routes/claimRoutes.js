const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

router.post('/:userId', async (req, res) => {
  const points = Math.floor(Math.random() * 10) + 1;
  const user = await User.findById(req.params.userId);
  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId: user._id, points });
  await history.save();

  res.json({ points, user });
});

router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users.map((u, i) => ({ ...u._doc, rank: i + 1 })));
});

module.exports = router;
