import { container } from 'tsyringe';

import { IHashProvider } from './HashProvider/IHashProvider';
import { HashProvider } from './HashProvider/implementation/HashProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);
