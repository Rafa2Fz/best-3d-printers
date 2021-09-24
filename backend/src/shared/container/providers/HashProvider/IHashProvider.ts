export interface IHashProvider {
  encrypt(text: string): Promise<string>;
  compare(cleanText: string, encryptedText: string): Promise<boolean>;
}
