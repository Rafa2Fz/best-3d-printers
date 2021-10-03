import { ensureAuthenticated } from '@modules/user/routes/middlewares/ensureAuthenticated';
import { Router } from 'express';

import { userRoutes } from '@modules/user/routes/user.routes';
import { sessionRoutes } from '@modules/user/routes/session.routes';
import { productRoutes } from '@modules/product/routes/products.routes';

export const routes = Router();

routes.use('/auth', sessionRoutes);
routes.use('/user', userRoutes);
routes.use('/product', productRoutes);
