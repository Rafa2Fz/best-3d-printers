import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('accessType')
export class AccessType {
  @PrimaryColumn()
  public id: number;

  @Column()
  public name: string;
}
