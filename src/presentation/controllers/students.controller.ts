import e, { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateStudentDto, UpdateStudentDto } from "../../domain/dtos";

export class StudentsController {
  //*DI
  constructor() {}

  public getStudents = async (req: Request, res: Response) => {
    const students = await prisma.student.findMany();
    res.json(students);
  };

  public getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;

    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = await prisma.student.findUnique({
      where: { id: identificador },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  };

  public createStudent = async (req: Request, res: Response) => {
    const [error, createStudentDto] = CreateStudentDto.create(req.body);
    //console.log({ body: req.body });

    if (error) return res.status(400).json({ message: error });
    const student = await prisma.student.create({
      data: createStudentDto!,
    });

    res.status(201).json({ message: "Student created", student });
  };
  public updateStudent = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateStudentDto] = UpdateStudentDto.update({
      id,
      ...req.body,
    });
    if (error) return res.status(400).json({ message: error });

    const student = await prisma.student.findUnique({
      where: { id },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const updateStudent = await prisma.student.update({
      where: { id },
      data: updateStudentDto!.values,
    });

    res.json({
      message: "Student updated",
      status: 200,
      student: updateStudent,
    });
  };

  public deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = await prisma.student.findUnique({
      where: { id: identificador },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const deleteStudent = await prisma.student.delete({
      where: { id: identificador },
    });
    res.json({
      res: deleteStudent,
      status: 200,
      message: "Student deleted",
    });
  };
}
