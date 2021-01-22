import movieService from 'services/movie.service';
import catchAsync from 'utils/catchAsync';
import { validate } from 'uuid';

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

// Thêm phim
movieControler.createMovie = catchAsync(async (req, res) => {
  const {
    director,
    duration,
    name,
    posterUrl,
    premiereTime,
    category,
    trailerUrl,
    description,
    language,
  } = req.body;
  const { id } = req.params;
  const movie = await movieService.createMovie(
    director,
    duration,
    name,
    posterUrl,
    premiereTime,
    category,
    id,
    trailerUrl,
    description,
    language,
  );
  res.json({ movie: movie, success: true });
});
// Chỉnh sửa phim theo id
movieControler.updateMovieById = catchAsync(async (req, res) => {
  const {
    director,
    duration,
    name,
    posterUrl,
    premiereTime,
    category,
    trailerUrl,
    description,
    language,
  } = req.body;
  const { id } = req.params;
  await movieService.updateMovieById(
    director,
    duration,
    name,
    posterUrl,
    premiereTime,
    category,
    id,
    trailerUrl,
    description,
    language,
  );
  const movie = await movieService.getMovieById({ id });
  res.json({ movie: movie, success: true });
});

// Xóa movie theo id
movieControler.deleteMovie = catchAsync(async (req, res) => {
  const { id } = req.params;
  await movieService.deleteMovie(id);
  res.json({ success: true });
});

movieControler.getMovieById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(validate(id));
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

movieControler.getAllInDay = catchAsync(async (req, res) => {
  const result = await movieService.getAllMovieInDay();
  res.send(result);
});

export default movieControler;
