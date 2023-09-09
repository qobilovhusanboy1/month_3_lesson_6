const Joi = require("joi");

class subscrideValidation {
  static async create({email}) {
    const {error} = Joi.object({
      email: Joi.string().max(32).required()
    }).validate({email});

    if (error) {
      return {error};
    } else {
      return {error: false};
    }
  }
}

module.exports = subscrideValidation;