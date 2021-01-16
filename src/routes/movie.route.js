import express from 'express';
import movieController from 'controllers/movie.controller';
import groupMovieController from 'controllers/groupMovie.controller';
import auth from 'middlewares/auth';
const router = express.Router();

router.get('/', movieController.getAll);
router.get('/group', groupMovieController.getAll);
router.get('/:id', movieController.getMovieById);
router.get('/reviews/:id', movieController.getMovieReviewsById);
router.post('/reviews', auth(), movieController.createMovieReview);

export default router;
