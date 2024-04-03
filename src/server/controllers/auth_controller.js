import express from "express";
const router = express.Router();
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import 'dotenv/config.js';

// This controller is for handling the login and assigning tokens.

// User login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid login credentials" });

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: "Login successful!", token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// registration route
router.post("/register", async (req, res) => {
  const { email, password } = req.body
  try {
    let user = await User.findOne({ email: email.toLowerCase() })
    if (user) {
      return res.status(400).json({ message: "User already exists" })
    }

    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

    user = new User({
      email: email.toLowerCase(),
      password: hashedPassword,
    })

    await user.save()

    // generate JWT token to log user in immediately after registration
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(201).json({ message: "User created successfully", token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error during registration" })
  }
})

export default router;
