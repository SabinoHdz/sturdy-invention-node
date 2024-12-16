import { Request, Response } from "express";

export class StudentsController {
  //*DI
  constructor() {}

  public getStudents = (req: Request, res: Response) => {
    res.json({
      message: "los datos se obtuvieron con exito",
      status: 200,
      data: [
        {
          id: 1,
          name: "John Doe",
          email: "",
        },
      ],
    });
  };
}
