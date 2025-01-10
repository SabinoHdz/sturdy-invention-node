import {
  CreateStudentDto,
  StudentDataSource,
  StudentEntity,
  StudentRepository,
  UpdateStudentDto,
} from "../../domain";

export class StudentRepositoryImpl implements StudentRepository {
  constructor(private readonly datasource: StudentDataSource) {}
  create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.datasource.create(createStudentDto);
  }
  getAll(): Promise<StudentEntity[]> {
    return this.datasource.getAll();
  }
  findById(id: number): Promise<StudentEntity> {
    return this.datasource.findById(id);
  }
  updateById(updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    return this.datasource.updateById(updateStudentDto);
  }
  deleteById(id: number): Promise<StudentEntity> {
    return this.datasource.deleteById(id);
  }
}
