const User = require('../models/userModel');

exports.postSignup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        res.json('Email already registered. Please log in.');
    }
    await User.create({ email, username, password});
    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Error saving user:', err);
    return res.status(400).json({ error: err.message });
  }
};
