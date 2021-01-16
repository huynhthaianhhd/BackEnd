import express from 'express';
import userController from 'controllers/user.controller';
import auth from 'middlewares/auth';
import userValidation from 'validations/user.validation';
import validate from 'middlewares/validate';
import { ROLES } from 'utils/constants';

const router = express.Router();

router.get(
  '/list',
  auth(ROLES.ADMIN),
  validate(userValidation.getMany),
  userController.getMany,
);

router.get('/', userController.getAllUsersExceptAdmin);

router.put('/:userId/block-user', userController.blockAUser);

router.get('/info', auth(), userController.getInfo);

router.put(
  '/info',
  auth(),
  validate(userValidation.updateInfo),
  userController.updateInfo,
);

export default router;
