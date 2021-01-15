import express from 'express';
import movieController from 'controllers/movie.controller';
import groupMovieController from 'controllers/groupMovie.controller';
const router = express.Router();

router.get('/', movieController.getAll);
router.get('/group', groupMovieController.getAll);

export default router;
