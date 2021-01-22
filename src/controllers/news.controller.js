import { newsService } from 'services';
import catchAsync from 'utils/catchAsync';

const newsController = {};

newsController.getNewsById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const news = await newsService.getById(id);
  return res.json(news);
});

newsController.getManyNews = catchAsync(async (req, res) => {
  const news = await newsService.getMany();
  return res.json(news);
});

export default newsController;
