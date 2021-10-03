import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ProductCharacteristic } from './ProductCharacteristic';

@Entity('characteristics')
export class Characteristic {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => ProductCharacteristic,
    productCharacteristic => productCharacteristic.characteristic,
  )
  public productCharacteristic!: ProductCharacteristic[];
}
