import { CreateStudentDto, UpdateStudentDto } from "../dtos";
import { StudentEntity } from "../entities/student.entity";

export abstract class StudentRepository {
  abstract create(createStudentDto: CreateStudentDto): Promise<StudentEntity>;
  //TODO:páginación
  abstract getAll(): Promise<StudentEntity[]>;
  abstract findById(id: number): Promise<StudentEntity>;

  abstract updateById(
    updateStudentDto: UpdateStudentDto
  ): Promise<StudentEntity>;
  abstract deleteById(id: number): Promise<StudentEntity>;
}
