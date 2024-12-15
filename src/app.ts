import { envs } from "./config/envs";
import { Server } from "./presentation/server";

(async () => {
  main();
})();

function main() {
  const server = new Server({ PORT: envs.PORT });
  server.start();
}
