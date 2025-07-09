const User = require('../models/User');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

// Signup controller
exports.signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User created', user: { username: newUser.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// @desc   Login user
// @route  POST /api/auth/login
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user: { username: user.username } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

