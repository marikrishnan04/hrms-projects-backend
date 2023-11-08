const Joi = require("joi");


const joiValidatelogin = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });


  module.exports=joiValidatelogin