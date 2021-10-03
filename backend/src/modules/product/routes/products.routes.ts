import { CreateProductController } from './../useCase/CreateProduct/CreateProductController';
import Router from 'express';

export const productRoutes = Router();

const productController = new CreateProductController();
productRoutes.post('/', async (request, response) => {
  await productController.create(request, response);
});
