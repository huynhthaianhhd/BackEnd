import groupCinema from 'services/groupCinema.service';
import catchAsync from 'utils/catchAsync';

const groupCinemaController = {};

groupCinemaController.getAll = catchAsync(async (req, res) => {
  const { id, date } = req.body;
  if (id) {
    const result = await groupCinema.getAllByGroupId({ id, date });
    return res.send(result);
  } else {
    const allGroup = await groupCinema.getAll();
    return res.send(allGroup);
  }
});

export default groupCinemaController;
