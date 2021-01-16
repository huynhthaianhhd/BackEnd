import { cinemaService } from 'services';
import catchAsync from 'utils/catchAsync';

const cinemaController = {};

cinemaController.getAll = catchAsync(async (req, res) => {
  const cinemas = await cinemaService.getAll();
  return res.json(cinemas);
});

cinemaController.getCinemaOfGroupByTimeNMovie = catchAsync(async (req, res) => {
  const data = req.body;
  const cinemas = await cinemaService.getCinemaOfGroupByTimeNMovie(data);
  res.json({ status: 'Success', data: cinemas });
});

export default cinemaController;
