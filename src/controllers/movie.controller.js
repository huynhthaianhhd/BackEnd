import movieService from 'services/movie.service';
import catchAsync from 'utils/catchAsync';

const movieControler = {};

movieControler.getAll = catchAsync(async (req, res) => {
  const { limit, offset } = req.query;
  const allMovie = await movieService.getAll({ limit, offset });
  res.send(allMovie);
});

// Lấy tất cả các movie, không limit
movieControler.getAllMovie = catchAsync(async (req, res) => {
  const allMovie = await movieService.getAllMovie();
  res.json({ movies: allMovie });
});

// Xóa movie theo id
movieControler.deleteMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  await movieService.deleteMovie(id);
  res.json({ success: true });
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

movieControler.searchMovies = catchAsync(async (req, res) => {
  const data = req.body;
  const movies = await movieService.searchMovies(data);
  res.json({ status: 'Success', data: movies });
});

export default movieControler;
