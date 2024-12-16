import { Request, Response } from "express";

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
    const identificador = +id;

    if (isNaN(identificador))
      return res.status(400).json({ message: "Id argument is not a number" });

    const student = this.students.find((student) => student.id === +id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  };
}
