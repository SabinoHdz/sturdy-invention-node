import express, { Router } from "express";
import { stat } from "fs";

interface Options {
  PORT: number;
  routes: Router;
}
export class Server {
  private readonly port: number;
  private readonly routes: Router;
  private app = express();
  constructor(options: Options) {
    const { PORT, routes } = options;
    this.port = PORT;
    this.routes = routes;
  }
  async start() {
    //Routes
    this.app.use(this.routes);
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
