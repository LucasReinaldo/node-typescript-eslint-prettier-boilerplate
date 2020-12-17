/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

// import { createConnection } from 'typeorm';

const startServer = async () => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
  app.use(express.json());

  // createConnection method will automatically read connection options
  // from your ormconfig file or environment variables
  // await createConnection();

  app.listen(5000, () => {
    console.log('🚀 Running at localhost:5000');
  });
};

startServer().catch((err: Error) => {
  console.log(err);
});
