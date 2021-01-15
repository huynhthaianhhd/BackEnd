import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import movieRoutes from './movie.route';
const router = express.Router();

router.get('/status', (req, res) =>
  res.json({
    message: 'OK',
  }),
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);

export default router;
