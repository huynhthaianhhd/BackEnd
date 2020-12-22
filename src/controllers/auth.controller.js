import httpStatus from 'http-status';
import catchAsync from 'utils/catchAsync';
import { userService, tokenService, authService } from 'services';

const authController = {};

authController.register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).json({ user: user.transform(), tokens });
});

authController.login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.json({ user: user.transform(), tokens });
});

export default authController;
