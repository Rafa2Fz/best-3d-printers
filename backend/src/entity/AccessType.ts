import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('AccessType')
export default class AccessType {
  @PrimaryColumn()
  public id: number;

  public name: string;
}
