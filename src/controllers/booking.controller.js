import { bookingService, transactionService } from 'services';
import catchAsync from 'utils/catchAsync';

const bookingController = {};

bookingController.getInfoByShowTimeId = catchAsync(async (req, res) => {
  const { showTimeId } = req.params;
  const cinema = await bookingService.getInfoByShowTimeId(showTimeId);
  return res.json(cinema);
});

bookingController.bookTickets = catchAsync(async (req, res) => {
  const { user } = req;
  const { showTimeId } = req.params;
  const { pickedSeats } = req.body;
  const pickedSeatIds = pickedSeats.map((item) => item.id);
  await transactionService.addMany({
    userId: user.id,
    showTimeId,
    pickedSeatIds,
  });
  return res.json({ message: 'Book tickets success' });
});

export default bookingController;
