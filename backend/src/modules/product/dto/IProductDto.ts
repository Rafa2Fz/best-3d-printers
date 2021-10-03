import { ProductCharacteristic } from '@entity/ProductCharacteristic';
export interface IProductDto {
  id?: string;
  name: string;
  category: string;
  characteristics?: ProductCharacteristic[];
}
