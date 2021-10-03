import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProduct } from './CreateProduct';

export class CreateProductController {
  async create(request: Request, response: Response) {
    const { name, category, characteristics } = request.body;
    const product = container.resolve(CreateProduct);
    await product.execute({ name, category, characteristics });
  }
}
