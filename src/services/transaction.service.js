import { Transaction } from 'database/models';

const transactionService = {};

transactionService.addMany = async ({ showTimeId, userId, pickedSeatIds }) => {
  const insertedObjects = pickedSeatIds.map((seatId) => ({
    userId,
    showTimeId,
    seatId,
  }));

  return await Transaction.bulkCreate(insertedObjects);
};

export default transactionService;
