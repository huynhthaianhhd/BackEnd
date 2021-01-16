import { Cinema, Seat, Transaction, ShowTime, Movie } from 'database/models';

const bookingService = {};

bookingService.getInfoByShowTimeId = async (showTimeId) => {
  const showTime = await ShowTime.findOne({
    where: {
      id: showTimeId,
    },
  });

  return await Cinema.findOne({
    where: {
      id: showTime.cinemaId,
    },
    include: [
      {
        model: ShowTime,
        as: 'showTime',
        where: {
          id: showTimeId,
        },
        include: [{ model: Movie, as: 'movie' }],
      },
      {
        model: Seat,
        as: 'seat',
        include: [{ model: Transaction, as: 'transaction' }],
      },
    ],
  });
};

export default bookingService;
