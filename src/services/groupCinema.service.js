import { GroupCinema, Cinema, Movie, ShowTime } from 'database/models';
import moment from 'moment';
const groupCinema = {};

groupCinema.getAll = async () => {
  return await GroupCinema.findAll({
    include: [{ model: Cinema, as: 'cinemas' }],
  });
};

groupCinema.getAllByGroupId = async ({ id }) => {
  // return await Cinema.findAll({
  //   where: {
  //     idGroup: id,
  //   },
  //   include: [
  //     {
  //       model: Movie,
  //       as: 'movies',
  //       include: [
  //         {
  //           model: ShowTime,
  //           as: 'showTimes',
  //           where: {
  //             id: '2e7cccf9-b8ae-4596-9fd4-8effcf72ab7d',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // });
  return await ShowTime.findAll({
    include: [
      { model: Movie, as: 'showTimes' },
      {
        model: Cinema,
        as: 'movies',
        where: {
          idGroup: id,
        },
      },
    ],
  });
};
export default groupCinema;
