import { Router } from "express";
import { StudentsController } from "../controllers/students.controller";
import { StudentDataSourceImpl } from "../../infraestructure/datasource/student.datasource.impl";
import { StudentRepositoryImpl } from "../../infraestructure/repositories/student.repository.impl";
export class StudentRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new StudentDataSourceImpl();
    const todoRepository = new StudentRepositoryImpl(datasource);
    const studentsController = new StudentsController(todoRepository);
    router.get("/", studentsController.getStudents);
    router.get("/:id", studentsController.getStudentById);
    router.post("/", studentsController.createStudent);
    router.put("/:id", studentsController.updateStudent);
    router.delete("/:id", studentsController.deleteStudent);
    return router;
  }
}
