import { StudentEntity } from "../../entities/student.entity";
import { StudentRepository } from "../../repositories/student.repository";

export interface GetStudentsCase {
  execute(): Promise<StudentEntity[]>;
}

export class GetStudents implements GetStudentsCase {
  constructor(private readonly repository: StudentRepository) {}
  execute(): Promise<StudentEntity[]> {
    return this.repository.getAll();
  }
}
