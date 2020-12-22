import http from 'http';
import app from 'configs/express';
import connectDatabase from 'configs/sequelize';
import { port, env } from './configs/vars';

connectDatabase();

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`server started on port ${port} (${env})`),
);

export default server;
