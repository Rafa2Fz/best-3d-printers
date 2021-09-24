import { Repository, getRepository } from 'typeorm';

import { AccessType } from '@entity/AccessType';
import { User } from '@entity/User';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IUserDto } from '@modules/user/dto/IUserDto';

export class UserRepository implements IUserRepository {
  public userRepository: Repository<User>;
  public accessTypeRepository: Repository<AccessType>;
  constructor() {
    this.userRepository = getRepository(User);
    this.accessTypeRepository = getRepository(AccessType);
  }

  public async create(userData: IUserDto): Promise<User> {
    const { name, email, password, accessTypeId } = userData;
    const accessType = await this.accessTypeRepository.findOne(accessTypeId);
    const user = this.userRepository.create({
      name,
      email,
      password,
      accessType,
    });
    return user;
  }

  public async save(user: User): Promise<User> {
    const userSaved = await this.userRepository.save(user);
    return userSaved;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
