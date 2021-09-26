import auth from 'config/auth';
import { verify } from 'jsonwebtoken';
import { AppError } from '@shared/error/AppError';
import { NextFunction, Request, Response } from 'express';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const headerToken = request.headers.authorization;

  if (!headerToken) {
    throw new AppError('Token is missing');
  }

  const [, token] = headerToken.split(' ');

  const { secret } = auth.jwt;

  const jwtPayload = verify(token, secret);

  request.user = {
    id: jwtPayload.sub as string,
  };

  next();
}
