import { Cinema, Seat, Transaction, ShowTime } from 'database/models';

const cinemaService = {};

cinemaService.getAll = async () => {
  return await Cinema.findAll();
};

cinemaService.getOneByShowTimeId = async (showTimeId) => {
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
        model: Seat,
        as: 'seat',
        include: [{ model: Transaction, as: 'transaction' }],
      },
    ],
  });
};

export default cinemaService;
