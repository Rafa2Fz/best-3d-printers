import 'reflect-metadata';
import dotenv from 'dotenv';
import '@shared/container';
import '@config/database';
import 'express-async-errors';
import express, { Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from '@shared/error/AppError';

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);

app.use((err, request: Request, response: Response) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json(err);
  } else {
    response.status(500).json({ message: 'Internal server error' });
  }
  console.log(err);
});

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});
