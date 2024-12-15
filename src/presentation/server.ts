import express from "express";

interface Options {
  PORT: number;
}
export class Server {
  private readonly port: number;
  private app = express();
  constructor(options: Options) {
    const { PORT } = options;
    this.port = PORT;
  }
  async start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
