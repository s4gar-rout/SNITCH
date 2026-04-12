import userModel from "../models/user.model.js";
import { config } from "../config/config.js";
import jwt from "jsonwebtoken";

async function sendTokenResponse(user, res, message) {
  const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token);

  res.status(200).json({
    success: true,
    message,
    token,
    user: {
      id: user._id,
      fullname: user.fullname,
      email: user.email,
      contact: user.contact,
      role: user.role,
    },
  });
}

export const register = async (req, res) => {
  const { fullname, contact, email, password, isSeller } = req.body;
  // Check if user already exists with the same email or contact
  try {
    const existingUser = await userModel.findOne({
      $or: [{ email }, { contact }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email or contact",
      });
    }

    const user = await userModel.create({
      fullname,
      contact,
      email,
      password,
      role: isSeller ? "seller" : "buyer",

    });
    await sendTokenResponse(user, res, "User registered successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Email or Password"
    })
  }

  const isMatch = await user.comparePassword(password)
  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password"
    })
  }

  await sendTokenResponse(user, res, "User Logged in successfully")

}