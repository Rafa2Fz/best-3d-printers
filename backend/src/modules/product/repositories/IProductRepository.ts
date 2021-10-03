import { IProductDto } from '../dto/IProductDto';
import { Product } from '@entity/Product';
import { ProductCharacteristic } from '@entity/ProductCharacteristic';
import { IProductCharacteristicDto } from '../dto/IProductCharacteristicDto';

export interface IProductRepository {
  create(productData: IProductDto): Promise<Product>;
  save(
    product: IProductDto,
    characteristicsValues: ProductCharacteristic[],
  ): Promise<IProductDto>;

  createProductCharacteristic(
    productCharacteristcData: IProductCharacteristicDto[],
  ): Promise<ProductCharacteristic[]>;

  find(productId: string): Promise<ProductCharacteristic[] | undefined>;
}
