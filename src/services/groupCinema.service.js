import { GroupCinema, Cinema, Movie, ShowTime } from 'database/models';
import moment from 'moment';
import { Op } from 'sequelize';
const groupCinema = {};

groupCinema.getAll = async () => {
  return await GroupCinema.findAll({
    include: [{ model: Cinema, as: 'cinemas' }],
  });
};

groupCinema.getAllByGroupId = async ({ id, date }) => {
  let tempDate = date || Date();
  const timeGet = moment(tempDate).format('YYYY-MM-DD');
  const timeStart = moment(`${timeGet} 00:00:00`);
  const timeEnd = moment(`${timeGet} 23:59:59`);

  return await Cinema.findAll({
    where: {
      idGroup: id,
    },
    order: [
      ['id', 'DESC'],
      ['name', 'ASC'],
    ],
    include: [
      {
        model: Movie,
        as: 'movies',
        include: [
          {
            model: ShowTime,
            as: 'showTimes',
            where: {
              startTime: {
                [Op.between]: [timeStart, timeEnd],
              },
            },
          },
        ],
      },
    ],
  });
};
export default groupCinema;
