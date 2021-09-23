import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('users')
export default class AccessType {
  @PrimaryColumn()
  public readonly id: number;

  public readonly name: string;
}
