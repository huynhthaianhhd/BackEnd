import {
  Cinema,
  Seat,
  Transaction,
  ShowTime,
  // GroupCinema,
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
  const timeGet = moment(startTime).format('YYYY-MM-DD');

  const timeStart = moment(`${timeGet} 00:00:00`);
  const timeEnd = moment(`${timeGet} 23:59:59`);

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
      startTime: {
        [Op.between]: [timeStart, timeEnd],
      },
    },
    order: [['createdAt', 'DESC']],
  });

  return cinemas;
};

export default cinemaService;
