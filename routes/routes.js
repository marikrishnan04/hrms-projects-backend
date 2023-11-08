const { registerUser } = require("../controllers/Registration/register");
const { loginUser } = require("../controllers/login/login");

const routes = require("express").Router();

// Define the route for first auth registration
routes.post('/registration', registerUser);


// Define the route for loginUser
routes.post('/login',loginUser );



module.exports = routes;
