import Joi from 'joi';

const userValidation = {};

userValidation.getMany = {
  query: Joi.object({
    page: Joi.number().min(1),
    perPage: Joi.number().min(1),
  }),
};

userValidation.updateInfo = {
  body: Joi.object({
    email: Joi.string().email(),
    name: Joi.string().pattern(/^[a-zA-Z ]+$/),
    avatar: Joi.string(),
    country: Joi.string().pattern(/^[a-zA-Z ]+$/),
    phone: Joi.string(),
  }),
};

export default userValidation;
