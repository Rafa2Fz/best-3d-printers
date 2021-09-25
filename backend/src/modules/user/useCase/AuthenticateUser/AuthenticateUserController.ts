import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AuthenticateUse } from './AuthenticateUser';

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticateUse);
    const payload = await authenticateUser.execute({ email, password });

    response.json(payload);
  }
}
