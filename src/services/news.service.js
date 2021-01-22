import { New } from 'database/models';

const newsService = {};

newsService.getById = async (id) => {
  const news = await New.findOne({
    where: {
      id,
    },
  });

  return news;
};

newsService.getMany = async () => {
  const news = await New.findAll({
    limit: 2,
    order: [['createdAt', 'DESC']],
    attributes: {
      exclude: ['content'],
    },
  });

  return news;
};

export default newsService;
