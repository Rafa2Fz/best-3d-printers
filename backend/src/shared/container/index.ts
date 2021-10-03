import { container } from 'tsyringe';
import './providers';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { UserRepository } from '@modules/user/repositories/implementation/UserRepository';

import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { ProductRepository } from '@modules/product/repositories/implementation/ProductRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
