const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const adminRoutes = require('./admin');
const forgotPasswordRoutes = require('./forgot-password');

router.use('/health-check', async (req, res, next) => {
  try {
    let user = await User.findById(req.body.id);
    return res.json({
      message: 'ok',
      user
    });
  } catch (error) {
    next(error);
  }
});
// mount individual user route
router.use('/users', userRoutes);

// mount auth routes
router.use('/auth', authRoutes);

// mount admin routes
router.use('/admin', adminRoutes);

//mount forgot password
router.use('/password', forgotPasswordRoutes);

module.exports = router;
