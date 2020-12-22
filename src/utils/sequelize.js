export const paginate = ({ page = 1, perPage = 20 }) => {
  const order = [['updatedAt', 'DESC']];
  const offset = perPage * (page - 1);
  const limit = perPage;

  return {
    order,
    offset,
    limit,
  };
};
