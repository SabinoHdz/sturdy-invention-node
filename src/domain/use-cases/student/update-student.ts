import { UpdateStudentDto } from "../../dtos";
import { StudentEntity } from "../../entities/student.entity";
import { StudentRepository } from "../../repositories/student.repository";

export interface UpdateStudentCase {
  execute(dto: UpdateStudentDto): Promise<StudentEntity>;
}

export class UpdateStudent implements UpdateStudentCase {
  constructor(private readonly repository: StudentRepository) {}
  execute(dto: UpdateStudentDto): Promise<StudentEntity> {
    return this.repository.updateById(dto);
  }
}
