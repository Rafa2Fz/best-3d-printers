import { Router } from 'express';

import { AuthenticateUserController } from '../useCase/AuthenticateUser/AuthenticateUserController';

export const sessionRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

sessionRoutes.post('/', authenticateUserController.handle);
