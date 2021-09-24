import { AccessType } from './AccessType';
import {
  Entity,
  Column,
  PrimaryColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  public readonly id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  public password: string;

  @ManyToOne(type => AccessType, { eager: true })
  @JoinColumn()
  public accessType: AccessType;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;

  constructor(
    props: Omit<User, 'id' | 'created_at' | 'updated_at'>,
    id?: string,
  ) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    }
  }
}
