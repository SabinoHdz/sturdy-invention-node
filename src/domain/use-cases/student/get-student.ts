import { StudentEntity } from "../../entities/student.entity";
import { StudentRepository } from "../../repositories/student.repository";

export interface GetStudentCase {
  execute(id: number): Promise<StudentEntity>;
}

export class GetStudent implements GetStudentCase {
  constructor(private readonly repository: StudentRepository) {}
  execute(id: number): Promise<StudentEntity> {
    return this.repository.findById(id);
  }
}
