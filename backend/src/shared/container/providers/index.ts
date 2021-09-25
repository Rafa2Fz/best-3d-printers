import { container } from 'tsyringe';

import { IHashProvider } from './HashProvider/IHashProvider';
import { HashProvider } from './HashProvider/implementation/HashProvider';

import { GenerateJwtTokenProvider } from './GenerateJwtToken/implementation/GenerateJwtTokenProvider';
import { IGenerateJwtTokenProvider } from './GenerateJwtToken/IGenerateJwtTokenProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);

container.registerSingleton<IGenerateJwtTokenProvider>(
  'GenerateJwtTokenProvider',
  GenerateJwtTokenProvider,
);
