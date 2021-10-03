import {
  Column,
  Entity,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ProductCharacteristic } from './ProductCharacteristic';

@Entity('products')
export class Product {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  category!: string;

  @OneToMany(
    () => ProductCharacteristic,
    productCharacteristic => productCharacteristic.product,
  )
  public productCharacteristic!: ProductCharacteristic[];

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;

  constructor(
    props: Omit<Product, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    }
  }
}
