import { IGenerateJwtTokenProvider } from '../IGenerateJwtTokenProvider';
import { sign } from 'jsonwebtoken';
import auth from '@config/auth';
export class GenerateJwtTokenProvider implements IGenerateJwtTokenProvider {
  generateToken<T extends object>(payload: T, userId: string): string {
    const { secret, expiresIn } = auth.jwt;
    const token = sign(payload, secret, { expiresIn, subject: userId });
    return token;
  }
}
