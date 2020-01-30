const { Joi } = require('celebrate');

module.exports = {
  userSignup: {
    body: {
      name: Joi.string()
        .min(2)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      phone: Joi.string().required(),
      password: Joi.string()
        .min(8)
        .required()
    }
  },
  paramId: {
    params: {
      userId: Joi.string()
        .regex(/[a-fA-F0-9]{24}/)
        .required()
    }
  },
  Update: {
    body: {
      name: Joi.string().min(2),
      phone: Joi.string(), //.required(),
      organisation: Joi.string() //.required()
    }
  },
  passwordUpdate: {
    body: {
      oldPassword: Joi.string()
        .min(8)
        .required(),
      newPassword: Joi.string()
        .min(8)
        .required()
    }
  }
  //added login validation
};
