import express from 'express';
import validate from 'middlewares/validate';
import authController from 'controllers/auth.controller';
import authValidation from 'validations/auth.validation';

const router = express.Router();

router.post(
  '/register',
  validate(authValidation.register),
  authController.register,
);

router.post('/login', validate(authValidation.login), authController.login);

export default router;
