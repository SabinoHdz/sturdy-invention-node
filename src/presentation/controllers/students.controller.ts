import { Request, Response } from "express";
import { stat } from "fs";

export class StudentsController {
  //*DI

  students = [
    {
      id: 1,
      name: "John Doe",
      email: "John@example.com",
      account: 2344545,
      age: 23,
      career: "Software Engineering",
      enrollment_date: "2021-01-01",
    },
    {
      id: 2,
      name: "John Doe",
      email: "John@example.com",
      account: 2344545,
      age: 23,
      career: "Software Engineering",
      enrollment_date: "2021-01-01",
    },
    {
      id: 3,
      name: "John Doe",
      email: "John@example.com",
      account: 2344545,
      age: 23,
      career: "Data Science",
      enrollment_date: "2021-01-01",
    },
    {
      id: 4,
      name: "John Doe",
      email: "John@example.com",
      account: 2344545,
      age: 23,
      career: "Data Science",
      enrollment_date: "2021-01-01",
    },
  ];
  constructor() {}

  public getStudents = (req: Request, res: Response) => {
    res.json(this.students);
  };

  public getStudentById = (req: Request, res: Response) => {
    const { id } = req.params;
    console.log(id);
    const identificador = +id;

    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.json(student);
  };

  public createStudent = (req: Request, res: Response) => {
    const { name, email, account, age, career } = req.body;
    console.log({ body: req.body });

    if (!name) return res.status(400).json({ message: "Name is required" });
    if (!email) return res.status(400).json({ message: "Email is required" });
    if (!account)
      return res.status(400).json({ message: "Account is required" });
    if (!age) return res.status(400).json({ message: "Age is required" });
    if (!career) return res.status(400).json({ message: "Career is required" });

    const student = {
      id: this.students.length + 1,
      ...req.body,
    };
    this.students.push(student);
    res.status(201).json({ message: "Student created" });
  };
  public updateStudent = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, account, age, career } = req.body;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    student.name = name ?? student.name;
    student.email = email ?? student.email;
    student.account = account ?? student.account;
    student.age = age ?? student.age;
    student.career = career ?? student.career;

    res.json(student);
  };

  public deleteStudent = (req: Request, res: Response) => {
    const { id } = req.params;
    const identificador = +id;
    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    this.students = this.students.filter((student) => student.id !== +id);
    res.json({
      res: student,
      status: 200,
      message: "Student deleted",
    });
  };
}
