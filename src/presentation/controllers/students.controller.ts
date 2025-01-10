import e, { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateStudentDto, UpdateStudentDto } from "../../domain/dtos";
import { StudentRepository } from "../../domain";

export class StudentsController {
  //*DI
  constructor(private readonly studenRepository: StudentRepository) {}

  public getStudents = async (req: Request, res: Response) => {
    const todos = await this.studenRepository.getAll();
    res.json(todos);
  };

  public getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;

    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });
    try {
      const student = await this.studenRepository.findById(identificador);
      res.json(student);
    } catch (error) {
      res.status(404).json({ error });
    }
  };

  public createStudent = async (req: Request, res: Response) => {
    const [error, createStudentDto] = CreateStudentDto.create(req.body);
    if (error) return res.status(400).json({ message: error });
    const student = await this.studenRepository.create(createStudentDto!);

    res.status(201).json({ message: "Student created", student });
  };
  public updateStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateStudentDto] = UpdateStudentDto.update({
      id,
      ...req.body,
    });
    if (error) return res.status(400).json({ message: error });

    try {
      const updateStudent = await this.studenRepository.updateById(
        updateStudentDto!
      );
      res.json({
        message: "Student updated",
        status: 200,
        student: updateStudent,
      });
    } catch (error) {
      res.status(404).json({ error });
    }
  };

  public deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    try {
      const deleteStudent = await this.studenRepository.deleteById(
        identificador
      );

      res.json({
        res: deleteStudent,
        status: 200,
        message: "Student deleted",
      });
    } catch (error) {
      res.status(404).json({ error });
    }
  };
}
