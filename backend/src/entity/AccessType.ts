import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('AccessType')
export class AccessType {
  @PrimaryColumn()
  public id: number;

  @Column()
  public name: string;
}
