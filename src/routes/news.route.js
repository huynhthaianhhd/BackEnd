import express from 'express';
import newsController from 'controllers/news.controller';
import auth from 'middlewares/auth';
const router = express.Router();

router.get('/:id', newsController.getNewsById);
router.get('/', newsController.getManyNews);
router.post('/', auth(), newsController.createOrUpdateNews);

export default router;
