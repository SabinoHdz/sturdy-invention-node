import { prisma } from "../../data/postgres";
import {
  CreateStudentDto,
  StudentDataSource,
  StudentEntity,
  UpdateStudentDto,
} from "../../domain";

export class StudentDataSourceImpl implements StudentDataSource {
  async create(createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    const student = await prisma.student.create({
      data: createStudentDto!,
    });

    return StudentEntity.mapperObjectToEntity(student);
  }
  async getAll(): Promise<StudentEntity[]> {
    const students = await prisma.student.findMany();
    return students.map((student) =>
      StudentEntity.mapperObjectToEntity(student)
    );
  }
  async findById(id: number): Promise<StudentEntity> {
    const student = await prisma.student.findFirst({
      where: { id },
    });
    if (!student) throw `Student with id ${id} not found`;
    return StudentEntity.mapperObjectToEntity(student);
  }
  async updateById(updateStudentDto: UpdateStudentDto): Promise<StudentEntity> {
    const student = await this.findById(updateStudentDto.id);

    const updateStudent = await prisma.student.update({
      where: { id: updateStudentDto.id },
      data: updateStudentDto!.values,
    });
    return StudentEntity.mapperObjectToEntity(updateStudent);
  }
  async deleteById(id: number): Promise<StudentEntity> {
    const student = await this.findById(id);
    const deleteStudent = await prisma.student.delete({
      where: { id },
    });
    return StudentEntity.mapperObjectToEntity(deleteStudent);
  }
}
