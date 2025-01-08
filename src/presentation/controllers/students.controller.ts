import e, { Request, Response } from "express";
import { prisma } from "../../data/postgres";

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
    const { name, email, account, age, career, enrollment_date } = req.body;
    console.log({ body: req.body });

    if (!name) return res.status(400).json({ message: "Name is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!account)
      return res.status(400).json({ message: "Account is required" });
    if (!age) return res.status(400).json({ message: "Age is required" });
    if (!career) return res.status(400).json({ message: "Career is required" });

    const student = await prisma.student.create({
      data: {
        name,
        email,
        account,
        age,
        career,
        enrollment_date: new Date(enrollment_date),
      },
    });

    res.status(201).json({ message: "Student created", student });
  };
  public updateStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, account, age, career, enrollment_date } = req.body;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = await prisma.student.findUnique({
      where: { id: identificador },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.name = name ?? student.name;
    student.email = email ?? student.email;
    student.account = account ?? student.account;
    student.age = age ?? student.age;
    student.career = career ?? student.career;
    student.enrollment_date = enrollment_date
      ? new Date(enrollment_date)
      : student.enrollment_date;

    const updateStudent = await prisma.student.update({
      where: { id: identificador },
      data: student,
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
