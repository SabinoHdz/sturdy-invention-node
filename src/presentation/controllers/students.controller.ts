import { Request, Response } from "express";
import { CreateStudentDto, UpdateStudentDto } from "../../domain/dtos";
import {
  CreateStudent,
  DeleteStudent,
  GetStudent,
  GetStudents,
  StudentRepository,
  UpdateStudent,
} from "../../domain";

export class StudentsController {
  //*DI
  constructor(private readonly studenRepository: StudentRepository) {}

  public getStudents = (req: Request, res: Response) => {
    new GetStudents(this.studenRepository)
      .execute()
      .then((students) => res.json(students))
      .catch((error) => res.status(400).json({ error }));
  };

  public getStudentById = (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;

    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });
    new GetStudent(this.studenRepository)
      .execute(identificador)
      .then((student) => res.json(student))
      .catch((error) => res.status(400).json({ error }));
  };

  public createStudent = (req: Request, res: Response) => {
    const [error, createStudentDto] = CreateStudentDto.create(req.body);
    if (error) return res.status(400).json({ message: error });

    new CreateStudent(this.studenRepository)
      .execute(createStudentDto!)
      .then((student) => res.json(student))
      .catch((error) => res.status(400).json({ error }));
  };
  public updateStudent = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateStudentDto] = UpdateStudentDto.update({
      id,
      ...req.body,
    });
    if (error) return res.status(400).json({ message: error });

    new UpdateStudent(this.studenRepository)
      .execute(updateStudentDto!)
      .then((student) => res.json(student))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteStudent = (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    new DeleteStudent(this.studenRepository)
      .execute(identificador)
      .then((student) => res.json(student))
      .catch((error) => res.status(400).json({ error }));
  };
}
