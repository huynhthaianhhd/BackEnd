import {
  Cinema,
  Seat,
  Transaction,
  ShowTime,
  GroupCinema,
} from 'database/models';

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

cinemaService.getCinemaOfGroupByTimeNMovie = async (data) => {
  const { movieId, startTime, idGroup } = data;

  const cinemas = await ShowTime.findAll({
    include: [
      {
        model: Cinema,
        as: 'cinema',
        required: false,
        where: {
          idGroup,
        },
      },
    ],
    where: {
      movieId,
      startTime,
    },
    order: [['createdAt', 'DESC']],
  });

  return cinemas;
};

export default cinemaService;
