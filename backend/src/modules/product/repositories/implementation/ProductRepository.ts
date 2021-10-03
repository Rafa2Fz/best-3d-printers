import { IProductDto } from './../../dto/IProductDto';
import { Characteristic } from '@entity/Characteristic';
import { Product } from '@entity/Product';
import { ProductCharacteristic } from '@entity/ProductCharacteristic';
import { Repository, getRepository } from 'typeorm';
import { IProductRepository } from '../IProductRepository';
import { IProductCharacteristicDto } from '@modules/product/dto/IProductCharacteristicDto';

export class ProductRepository implements IProductRepository {
  productOrm: Repository<Product>;
  characteristicOrm: Repository<Characteristic>;
  productCharacteristicOrm: Repository<ProductCharacteristic>;

  constructor() {
    this.productOrm = getRepository(Product);
    this.characteristicOrm = getRepository(Characteristic);
    this.productCharacteristicOrm = getRepository(ProductCharacteristic);
  }

  async create({ name, category }: IProductDto): Promise<Product> {
    return this.productOrm.create({ name, category });
  }

  async save(
    productData: IProductDto,
    characteristicsValues: ProductCharacteristic[],
  ): Promise<IProductDto> {
    const product = await this.productOrm.save(productData);
    await this.productCharacteristicOrm.save(characteristicsValues);
    return product;
  }

  async createProductCharacteristic(
    productCharacteristcData: IProductCharacteristicDto[],
  ): Promise<ProductCharacteristic[]> {
    return this.productCharacteristicOrm.create(productCharacteristcData);
  }

  async find(productId: string): Promise<ProductCharacteristic[] | undefined> {
    return await this.productCharacteristicOrm.find({
      where: {
        productId: productId,
      },
    });
  }
}
