import express from 'express';
import bookingController from 'controllers/booking.controller';
import auth from 'middlewares/auth';
import { ROLES } from 'utils/constants';
const router = express.Router();

router.get('/:showTimeId', auth(), bookingController.getInfoByShowTimeId);
router.post('/:showTimeId', auth(), bookingController.bookTickets);
router.get('/', auth(), bookingController.getAll);

export default router;
