import { Router } from "express";
import { StudentRoutes } from "./routes/students.router";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/v1", AppRoutes.baseRouters);
    return router;
  }
  static get baseRouters(): Router {
    const routes = Router();
    routes.use("/students", StudentRoutes.routes);
    return routes;
  }
}
