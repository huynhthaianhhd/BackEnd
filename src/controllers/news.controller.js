import { newsService } from 'services';
import catchAsync from 'utils/catchAsync';

const newsController = {};

newsController.getNewsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const news = await newsService.getById(id);
  return res.json(news);
});

newsController.getManyNews = catchAsync(async (req, res) => {
  const { limit } = req.query;
  const news = await newsService.getMany(limit);
  return res.json(news);
});

newsController.createOrUpdateNews = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const news = await newsService.createOrUpdate({ ...req.body, userId });
  return res.json(news);
});

export default newsController;
