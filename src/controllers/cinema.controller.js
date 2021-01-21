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

cinemaController.getReviewOfCinema = catchAsync(async (req, res) => {
  const { id } = req.body;
  const reviews = await cinemaService.getReviewById({ id });
  res.send(reviews);
});

cinemaController.addReviewForCinema = catchAsync(async (req, res) => {
  const newReviews = await cinemaService.addReviewForCinema(req.body);
  res.send(newReviews);
});
export default cinemaController;
