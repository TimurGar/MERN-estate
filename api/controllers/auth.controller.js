import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  console.log(req.body);

  // saving the date received after the POST request
  const { username, email, password } = req.body;

  // encrypting the password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  // creating new user
  const newUser = new User({ username, email, hashedPassword });

  try {
    // await will stay on the line until the new user is added
    //(we had to change the signup function to async)
    await newUser.save();
    res.status(201).json("User created succefully");
  } catch (error) {
    res.status(500).json(error.message);
  };

};
