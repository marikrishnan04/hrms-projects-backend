const Joi = require("joi");

const joiValidate = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    Repeat_Password: Joi.string().required(),
  });

  module.exports=joiValidate