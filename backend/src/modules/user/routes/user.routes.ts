import { Router } from 'express';

import { CreateUserControl } from '../useCase/CreateUser/CreateUserControl';

export const userRoutes = Router();
const createUserControl = new CreateUserControl();

userRoutes.post('/', createUserControl.create);
