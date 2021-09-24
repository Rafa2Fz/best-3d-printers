import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUser } from './CreateUser';

export class CreateUserControl {
  public async create(request: Request, response: Response) {
    const { name, email, password, accessTypeId } = request.body;

    const createUser = container.resolve(CreateUser);
    const user = await createUser.execute({
      name,
      email,
      password,
      accessTypeId,
    });

    response.json(user);
  }
}
