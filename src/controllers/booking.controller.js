import { bookingService, transactionService } from 'services';
import catchAsync from 'utils/catchAsync';
import { nameOfSeats, calcTotal, pricePerSeatToString } from 'utils/common';
import { sendMailTicket } from 'configs/nodemailer';
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
  const seat = nameOfSeats(pickedSeats);
  const total = calcTotal(pickedSeats);
  const pricePerSeat = pricePerSeatToString(pickedSeats);
  const temp = await bookingService.getInfoByShowTimeId(showTimeId);
  const nameOfMovie = temp?.showTime?.[0]?.movie?.name;
  const nameOfCinema = temp?.name;
  sendMailTicket({
    receiverEmail: user.email,
    seat,
    total,
    pricePerSeat,
    nameOfMovie,
    nameOfCinema,
  });
  await transactionService.addMany({
    userId: user.id,
    showTimeId,
    pickedSeatIds,
  });
  return res.json({ message: 'Book tickets success' });
});

export default bookingController;
