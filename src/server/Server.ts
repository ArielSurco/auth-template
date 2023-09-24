import express, { type Application } from 'express';
import cors from 'cors';

import { ENV } from './environment';
import { ROUTES } from './routes';

export class Server {
  private app: Application;

  private port: number;

  constructor() {
    this.app = express();
    this.port = ENV.PORT;

    this.middlewares();

    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private routes() {
    Object.values(ROUTES).forEach(({ basePath, router }) => {
      this.app.use(basePath, router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}