import { CreateStudentDto } from "../../dtos";
import { StudentEntity } from "../../entities/student.entity";
import { StudentRepository } from "../../repositories/student.repository";

export interface CreateStudentCase {
  execute(dto: CreateStudentDto): Promise<StudentEntity>;
}

export class CreateStudent implements CreateStudentCase {
  constructor(private readonly repository: StudentRepository) {}
  execute(dto: CreateStudentDto): Promise<StudentEntity> {
    return this.repository.create(dto);
  }
}
