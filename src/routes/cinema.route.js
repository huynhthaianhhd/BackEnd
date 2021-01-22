import express from 'express';
import cinemaController from 'controllers/cinema.controller';
import {
  getReviewValidate,
  reviewValidate,
} from 'validations/common.validation';
import validate from 'middlewares/validate';

const router = express.Router();

router.get('/', cinemaController.getAll);
router.post('/', cinemaController.getCinemaOfGroupByTimeNMovie);
router.post(
  '/review',
  validate(getReviewValidate),
  cinemaController.getReviewOfCinema,
);
router.post(
  '/review/add',
  validate(reviewValidate),
  cinemaController.addReviewForCinema,
);

router.get('/movie', cinemaController.getCinemaByMovie);

export default router;
