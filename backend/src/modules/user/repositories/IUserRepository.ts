import { IUserDto } from '../dto/IUserDto';
import { User } from '@entity/User';

export interface IUserRepository {
  create(userData: IUserDto): Promise<User>;
  save(user: User): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
