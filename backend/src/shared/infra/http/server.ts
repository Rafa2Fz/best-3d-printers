import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server has started on port ${process.env.PORT}`);
});
