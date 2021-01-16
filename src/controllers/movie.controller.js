import movieService from 'services/movie.service';
import catchAsync from 'utils/catchAsync';

const movieControler = {};

movieControler.getAll = catchAsync(async (req, res) => {
  const { limit, offset } = req.params;
  const allMovie = await movieService.getAll({ limit, offset });
  res.send(allMovie);
});

movieControler.getMovieById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movie = await movieService.getMovieById({ id });
  res.json({ status: 'Success', data: movie });
});

movieControler.getMovieReviewsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const movieReviews = await movieService.getMovieReviewsById({ id });
  res.json({ status: 'Success', data: movieReviews });
});

movieControler.createMovieReview = catchAsync(async (req, res) => {
  const dataGet = req.body;
  const { user } = req;
  const review = { ...dataGet, userId: user.id };
  console.log(review, user);
  const movieReviews = await movieService.createMovieReview(review);
  res.json({ status: 'Success', data: movieReviews });
});

export default movieControler;
