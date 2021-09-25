export interface IGenerateJwtTokenProvider {
  generateToken<T extends object>(payload: T, userId: string): string;
}
