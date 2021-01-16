import express from 'express';
import movieController from 'controllers/movie.controller';
import groupCinemaController from 'controllers/groupCinema.controller';
import auth from 'middlewares/auth';
const router = express.Router();

router.get('/', movieController.getAll);
router.get('/group', groupCinemaController.getAll);
router.get('/:id', movieController.getMovieById);
router.get('/reviews/:id', movieController.getMovieReviewsById);
router.post('/reviews', auth(), movieController.createMovieReview);

export default router;
