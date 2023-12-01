const User = require('../models/userModel');

exports.postLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      res.status(200).json({ message: 'Login successful' });
    } catch (err) {
      res.status(400).json({ error: err.message });
        console.log('error', err);
    }
  };