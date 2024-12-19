import { Router } from "express";
import { StudentsController } from "../controllers/students.controller";
export class StudentRoutes {
  static get routes(): Router {
    const router = Router();
    const studentsController = new StudentsController();
    router.get("/", studentsController.getStudents);
    router.get("/:id", studentsController.getStudentById);
    router.post("/", studentsController.createStudent);
    router.put("/:id", studentsController.updateStudent);
    router.delete("/:id", studentsController.deleteStudent);
    return router;
  }
}
