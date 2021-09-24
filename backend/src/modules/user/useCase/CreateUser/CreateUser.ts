import { IUserDto } from './../../dto/IUserDto';
import { IUserRepository } from '../../repositories/IUserRepository';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';
import { IHashProvider } from '@shared/container/providers/HashProvider/IHashProvider';

@injectable()
export class CreateUser {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    accessTypeId,
  }: IUserDto): Promise<Omit<IUserDto, 'password'>> {
    const checkUser = await this.userRepository.findByEmail(email);

    if (checkUser) {
      throw new AppError('User email already registered');
    }

    if (accessTypeId != 1) {
      accessTypeId = 1;
    }
    const hashedPassword = await this.hashProvider.encrypt(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      accessTypeId,
    });

    await this.userRepository.save(user);

    return {
      id: user.id,
      name,
      email,
      accessTypeId,
    };
  }
}
