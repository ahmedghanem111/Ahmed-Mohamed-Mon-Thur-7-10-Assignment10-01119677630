import User from "../user/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const isExist = await User.findOne({
      $or: [{ email }, { userName }],
    });

    if (isExist) {
      return res.status(409).json({
        message: "Email or Username already exists",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Invalid Email or Password",
      });
    }

    const match = bcrypt.compareSync(
      password,
      user.password
    );

    if (!match) {
      return res.status(404).json({
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Success",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};