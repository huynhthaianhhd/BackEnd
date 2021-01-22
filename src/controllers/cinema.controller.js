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

cinemaController.getCinemaByMovie = catchAsync(async (req, res) => {
  const listMovie = await cinemaService.getCinemaByMovie(req.query);
  if (listMovie) {
    const result = listMovie;
    return res.send(result);
  } else {
    return res.send([]);
  }
});

export default cinemaController;
