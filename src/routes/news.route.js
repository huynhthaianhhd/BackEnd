import express from 'express';
import newsController from 'controllers/news.controller';
const router = express.Router();

router.get('/:id', newsController.getNewsById);
router.get('/', newsController.getManyNews);

export default router;
