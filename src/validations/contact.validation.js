const Joi = require("joi");

class contactValidator {
  static async create({name, phone_number, email, message}) {
    const {error} = Joi.object({
      name: Joi.string().max(32).required(),
      phone_number: Joi.string().max(32).required(),
      email: Joi.string().max(32).required(),
      message: Joi.string().max(1024).required(),
    }).validate({name, phone_number, email, message});

    if (error) {
      return {error};
    } else {
      return {error: false};
    }
  }
}

module.exports = contactValidator;