const bcrypt = require("bcrypt");
const User = require("../../models/first-Authoncation-Schemas/first-authoncation-Schema");
const joiValidatelogin = require("../joi-validate/first-Authoncation-login-joi-validate/first-Authoncation-register-joi-validate");

// login api
exports.loginUser = async (req, res) => {
  try {
    const { error } = joiValidatelogin.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const loginUser = await User.findOne({ email: req.body.email });

    if (!loginUser) {
      // If no user is found, return a 401 status and a message
      return res.status(401).send("Invalid Email or Password");
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(
      req.body.password,
      loginUser.password
    );

    if (!validPassword) {
      // If the password is incorrect, return an appropriate message
      return res.status(401).send("Invalid Email or Password");
    }

    // If both email and password are valid, send a success message
    res.send("Login success!!!");
  } catch (err) {
    // If an error occurs, send an error response
    console.error("Error: ", err);
    res.status(500).json("An error occurred during login.");
  }
};
