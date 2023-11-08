const User = require("../../models/first-Authoncation-Schemas/first-authoncation-Schema");
const joiValidate = require("../joi-validate/first-Authoncation-register-joi-validate/first-Authoncation-joi-validate");
const bcrypt = require("bcrypt");


// Define your registration route handler
exports.registerUser = async (req, res) => {
  try {
    const { error } = joiValidate.validate(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const { email, password, Repeat_Password } = req.body;

    if (password !== Repeat_Password) {
      return res.status(400).send("Passwords do not match");
    }

    // Use async/await for bcrypt functions
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: hashedPassword });

    // Use async/await for saving the user
    await newUser.save();

    res.json("User added successfully!");
  } catch (err) {
    console.error("Error: ", err);
    res.status(403).send("Error: " + err.message);
  }
};
