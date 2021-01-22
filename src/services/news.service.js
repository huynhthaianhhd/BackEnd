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

newsService.getMany = async (limit) => {
  if (limit)
    return await New.findAll({
      limit: limit,
      order: [['createdAt', 'DESC']],
      attributes: {
        exclude: ['content'],
      },
    });
  return await New.findAll({
    order: [['createdAt', 'DESC']],
  });
};

newsService.createOrUpdate = async (data) => {
  const { id, ...rest } = data;
  if (id) {
    return await New.update(rest, {
      where: {
        id,
      },
    });
  } else return await New.create(rest);
};

export default newsService;
