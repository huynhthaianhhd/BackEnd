import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import movieRoutes from './movie.route';
import cinemaRoutes from './cinema.route';
import bookingRoutes from './booking.route';
const router = express.Router();

router.get('/status', (req, res) =>
  res.json({
    message: 'OK',
  }),
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/movie', movieRoutes);
router.use('/cinema', cinemaRoutes);
router.use('/booking', bookingRoutes);

export default router;
