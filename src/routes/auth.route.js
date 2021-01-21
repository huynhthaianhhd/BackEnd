import express from 'express';
import validate from 'middlewares/validate';
import authController from 'controllers/auth.controller';
import authValidation from 'validations/auth.validation';
import { oAuth as oAuthLogin } from 'middlewares/auth';

const router = express.Router();

router.post(
  '/register',
  validate(authValidation.register),
  authController.register,
);

router.post('/login', validate(authValidation.login), authController.login);

router
  .route('/google')
  .post(
    validate(authValidation.oAuth),
    oAuthLogin('google'),
    authController.oAuth,
  );

router
  .route('/facebook')
  .post(
    validate(authValidation.oAuth),
    oAuthLogin('facebook'),
    authController.oAuth,
  );

export default router;
