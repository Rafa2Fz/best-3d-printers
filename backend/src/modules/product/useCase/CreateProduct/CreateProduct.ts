import { IProductDto } from './../../dto/IProductDto';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/error/AppError';

@injectable()
export class CreateProduct {
  constructor(
    @inject('ProductRepository')
    public productRepository: IProductRepository,
  ) {}

  async execute({ name, category, characteristics }: IProductDto) {
    const product = await this.productRepository.create({ name, category });

    if (!characteristics) {
      throw new AppError('Characteristics invalid');
    }

    characteristics.forEach(
      productCharacteristic => (productCharacteristic.productId = product.id),
    );

    const productCharacteristics =
      await this.productRepository.createProductCharacteristic(characteristics);

    const productsSaved = await this.productRepository.save(
      product,
      productCharacteristics,
    );

    console.log(productsSaved);
  }
}
