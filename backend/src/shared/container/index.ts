import { container } from 'tsyringe';
import './providers';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { UserRepository } from '@modules/user/repositories/implementation/UserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
