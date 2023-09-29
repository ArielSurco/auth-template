export class ResponseError extends Error {
  constructor(
    readonly statusCode: number,
    readonly message: string,
    readonly withStack: boolean = false,
  ) {
    super(message);
  }
}