import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }
    const user = await User.findOne({
      username,
    });

    if (user) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    //HASH PASSWORD

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if (newUser) {
      generateToken(newUser._id,res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } 
    else {
        res.status(400).json({
            message:"Invalid user data",
        })
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Internal server error",
    });
  }
};



export const signoutUser = (req, res) => {
  try{
    res.cookie("jwt","",{maxAge:0});
    res.status(200).json({
      message:"User logged out successfully",
    })
  }
  catch(error){
    res.status(500).json({
      error:error.message,
      message:"Internal server error",
    })
  }
};



export const signinUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });

    // Check if user exists and if the password matches
    if (!user || !(await bcrypt.compare(password, user.password || ""))) {
      return res.status(400).json({
        error: "Invalid username or password",
      });
    }

    // Generate and send token if the username and password are correct
    generateToken(user._id, res);
    res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
      username:user.username,
      gender:user.gender,
      profilePic:user.profilePic,
    })
  } catch (error) {
    // Handle server errors
    res.status(500).json({
      error: error.message,
    });
  }
};