import { Column, Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Characteristic } from './Characteristic';
import { Product } from './Product';

@Entity('productCharacteristic')
export class ProductCharacteristic {
  @PrimaryColumn()
  id: string;

  @Column()
  productId: string;

  @Column()
  characteristicId: number;

  @Column()
  value: string;

  @ManyToOne(() => Product, product => product.productCharacteristic)
  public product!: Product;

  @ManyToOne(
    () => Characteristic,
    characteristic => characteristic.productCharacteristic,
    { eager: true },
  )
  public characteristic!: Characteristic;

  constructor(props: Omit<Characteristic, 'id'>, id: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    }
  }
}
