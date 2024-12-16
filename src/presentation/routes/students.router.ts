import { Router } from "express";
import { StudentsController } from "../controllers/students.controller";
export class StudentRoutes {
  static get routes(): Router {
    const router = Router();
    const studentsController = new StudentsController();
    router.get("/", studentsController.getStudents);
    return router;
  }
}
