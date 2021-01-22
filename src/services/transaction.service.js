import {
  Transaction,
  User,
  Seat,
  ShowTime,
  Movie,
  Cinema,
} from 'database/models';

const transactionService = {};

transactionService.addMany = async ({ showTimeId, userId, pickedSeatIds }) => {
  const insertedObjects = pickedSeatIds.map((seatId) => ({
    userId,
    showTimeId,
    seatId,
  }));

  return await Transaction.bulkCreate(insertedObjects);
};

transactionService.getAll = async () => {
  const transactions = await Transaction.findAll({
    include: [
      {
        model: User,
        as: 'user',
      },
      {
        model: Seat,
        as: 'seat',
      },
      {
        model: ShowTime,
        as: 'showTime',
        include: [
          {
            model: Movie,
            as: 'movie',
          },
          {
            model: Cinema,
            as: 'cinema',
          },
        ],
      },
    ],
    order: [['createdAt', 'DESC']],
  });

  return transactions;
};

export default transactionService;
