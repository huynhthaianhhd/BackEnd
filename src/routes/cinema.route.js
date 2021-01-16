import express from 'express';
import cinemaController from 'controllers/cinema.controller';
const router = express.Router();

router.get('/', cinemaController.getAll);

export default router;
