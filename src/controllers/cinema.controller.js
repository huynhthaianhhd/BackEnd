import { cinemaService } from 'services';
import catchAsync from 'utils/catchAsync';

const cinemaController = {};

cinemaController.getAll = catchAsync(async (req, res) => {
  const cinemas = await cinemaService.getAll();
  return res.json(cinemas);
});

export default cinemaController;
