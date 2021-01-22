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

bookingController.getAll = catchAsync(async (req, res) => {
  const trans = await transactionService.getAll();
  const data = trans.map((trans) => {
    return {
      id: trans.id,
      userName: trans.user?.name,
      phone: trans.user?.phone,
      seat: `${trans.seat?.row}${trans.seat?.no}`,
      price: trans.seat?.price,
      time: trans.showTime?.startTime,
      movie: trans.showTime?.movie.name,
      posterUrl: trans.showTime?.movie.posterUrl,
      cinema: trans.showTime?.cinema.name,
    };
  });
  return res.json({ status: 'Success', data });
});

export default bookingController;
