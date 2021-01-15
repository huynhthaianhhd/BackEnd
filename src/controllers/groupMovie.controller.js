import groupCinema from 'services/groupCinema.service';
import catchAsync from 'utils/catchAsync';

const groupCinemaController = {};

groupCinemaController.getAll = catchAsync(async (req, res) => {
  const allGroup = await groupCinema.getAll();
  res.send(allGroup);
});

export default groupCinemaController;
