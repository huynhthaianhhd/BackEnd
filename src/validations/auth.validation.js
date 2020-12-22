import Joi from 'joi';

const authValidation = {};

authValidation.register = {
  body: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(128),
  }),
};

authValidation.login = {
  body: Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
};

export default authValidation;
