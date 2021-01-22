import express from 'express';
import movieController from 'controllers/movie.controller';
import groupCinemaController from 'controllers/groupCinema.controller';
import auth from 'middlewares/auth';
const router = express.Router();

router.get('/', movieController.getAll);
router.get('/all', movieController.getAllMovie);
router.get('/group', groupCinemaController.getAll);
router.post('/group', groupCinemaController.getAll);
router.post('/search', movieController.searchMovies);
router.post('/reviews', auth(), movieController.createMovieReview);
router.get('/:id', movieController.getMovieById);
router.post('/:id', movieController.createMovie);
router.put('/:id', movieController.updateMovieById);
router.delete('/:id', movieController.deleteMovie);
router.get('/reviews/:id', movieController.getMovieReviewsById);

export default router;
