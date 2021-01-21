import Joi from 'joi';

export const getReviewValidate = {
  body: Joi.object({
    id: Joi.required(),
  }),
};

export const reviewValidate = {
  body: Joi.object({
    userId: Joi.string().uuid().required(),
    cinemaId: Joi.string().uuid().required(),
    content: Joi.allow(),
    rating: Joi.number().required(),
  }),
};
