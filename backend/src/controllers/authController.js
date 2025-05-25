const validator = require("validator");
const generateToken = require("../utils/generateToken");
import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const signup = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.trim().toLowerCase();
    const { firstName, lastName, password } = req.body;
    if (!email || !firstName || !password) {
      return res.status(400).json({ message: "Fill all required fields!" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    if (email.length > 50) {
      return res
        .status(400)
        .json({ message: "Email cannot exceed 50 characters." });
    }
    if (firstName.length > 50) {
      return res
        .status(400)
        .json({ message: "First name cannot exceed 50 characters." });
    }
    if (lastName && lastName.length > 50) {
      return res
        .status(422)
        .json({ message: "Last name cannot exceed 50 characters." });
    }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(422).json({ message: "Please enter strong password!" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({
        message: "User already exists.",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
    generateToken(user._id, res);
    res.status(201).json({
      message: "Signed up successfully and you're now logged in.",
      data: {
        _id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong, Please try again later.",
    });
  }
};

const login = async (req, res) => {
  try {
    let { email } = req.body;
    email = email.trim().toLowerCase();
    const { password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "User don't exist or Wrong Credentials" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (passwordCompare) {
      generateToken(user._id, res);
      res.json({
        message: "User logged in successfully.",
        data: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login failed: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};

const logout = (req, res) => {
  res.cookie("token", null, { expires: new Date(0) });
  res.status(200).json({ message: "Logout sucessful." });
};

const changePassword = async (req, res) => {
  try {
    const loggedUser = req.user;
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res
        .status(400)
        .json({ message: "Both Old Password and New Password are required." });
    }
    const passwordCompare = await bcrypt.compare(
      oldPassword,
      loggedUser.password
    );
    if (!passwordCompare) {
      return res.status(401).json({ message: "Old Password is incorrect." });
    }
    if (await bcrypt.compare(newPassword, loggedUser.password)) {
      return res.status(422).json({ message: "New password must differ." });
    }
    if (
      !validator.isStrongPassword(newPassword, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return res.status(422).json({ message: "Please enter strong password." });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    loggedUser.password = hashedPassword;
    await loggedUser.save();
    res.status(200).json({ message: "Password changed successfully!" });
  } catch (error) {
    console.error("Error updating password!: ", error);
    res.status(500).json({
      message: "Something went wrong! Please try again later!",
    });
  }
};