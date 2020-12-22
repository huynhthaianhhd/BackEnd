require('dotenv').config();
module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DATABASE_DIALECT,
    protocol: process.env.DATABASE_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
};
