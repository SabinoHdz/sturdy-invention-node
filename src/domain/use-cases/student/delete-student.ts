import { StudentEntity } from "../../entities/student.entity";
import { StudentRepository } from "../../repositories/student.repository";

export interface DeleteStudentCase {
  execute(id: number): Promise<StudentEntity>;
}

export class DeleteStudent implements DeleteStudentCase {
  constructor(private readonly repository: StudentRepository) {}
  execute(id: number): Promise<StudentEntity> {
    return this.repository.deleteById(id);
  }
}
