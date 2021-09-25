import { Router } from 'express';

import { CreateUserController } from '../useCase/CreateUser/CreateUserController';

export const userRoutes = Router();
const createUserControl = new CreateUserController();

userRoutes.post('/', createUserControl.create);
