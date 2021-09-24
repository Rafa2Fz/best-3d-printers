import { IHashProvider } from '../IHashProvider';
import { hash, compare } from 'bcrypt';
export class HashProvider implements IHashProvider {
  public async encrypt(text: string): Promise<string> {
    return await hash(text, 10);
  }

  public async compare(
    cleanText: string,
    encryptedText: string,
  ): Promise<boolean> {
    return await compare(cleanText, encryptedText);
  }
}
