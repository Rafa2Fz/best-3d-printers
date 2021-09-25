import { User } from '@entity/User';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { IGenerateJwtTokenProvider } from '@shared/container/providers/GenerateJwtToken/IGenerateJwtTokenProvider';
import { IHashProvider } from '@shared/container/providers/HashProvider/IHashProvider';
import { AppError } from '@shared/error/AppError';
import { inject, injectable } from 'tsyringe';

interface Request {
  email: string;
  password: string;
}

type Payload = {
  user: User;
};

@injectable()
export class AuthenticateUse {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('GenerateJwtTokenProvider')
    private generateJwtToken: IGenerateJwtTokenProvider,
  ) {}

  public async execute({ email, password }: Request) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User email/password are incorrect');
    }

    const passwordMatched = this.hashProvider.compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('User email/password are incorrect');
    }

    const token = this.generateJwtToken.generateToken<Payload>(
      { user },
      user.id,
    );

    return {
      user: user.getUser(),
      token,
    };
  }
}
