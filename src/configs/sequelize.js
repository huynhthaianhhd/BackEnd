import { sequelize } from 'database/models';

const connectDatabase = () => {
  sequelize
    .authenticate()
    .then(() => console.log('Successfully connected to the database'))
    .catch((error) => {
      console.log(
        `Could not connect to the database. Exiting now...\n${error}`,
      );
      process.exit(-1);
    });
};

export default connectDatabase;
