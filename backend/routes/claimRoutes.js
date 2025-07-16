const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// Claim random points
router.post('/:userId', async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.points += points;
  await user.save();

  const history = new ClaimHistory({ userId, points });
  await history.save();

  res.json({ user, points });
});

// Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.json(users);
});

module.exports = router;
