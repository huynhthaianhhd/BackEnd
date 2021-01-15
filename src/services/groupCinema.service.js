import { GroupCinema, Cinema } from 'database/models';
const groupCinema = {};

groupCinema.getAll = async () => {
  return await GroupCinema.findAll({
    include: [{ model: Cinema, as: 'cinemas' }],
  });
};

export default groupCinema;
