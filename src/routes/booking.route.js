import express from 'express';
import bookingController from 'controllers/booking.controller';
import auth from 'middlewares/auth';
const router = express.Router();

router.get('/:showTimeId', auth(), bookingController.getInfoByShowTimeId);
router.post('/:showTimeId', auth(), bookingController.bookTickets);

export default router;
