import { ensureAuthenticated } from '@modules/user/routes/middlewares/ensureAuthenticated';
import { Router } from 'express';

import { userRoutes } from '@modules/user/routes/user.routes';
import { sessionRoutes } from '@modules/user/routes/session.routes';

export const routes = Router();

routes.use('/user', userRoutes);
routes.use('/auth', sessionRoutes);
