export class StudentEntity {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public account: number,
    public age: number,
    public career: string,
    public enrollment_date: Date
  ) {}

  public static mapperObjectToEntity(object: {
    [key: string]: any;
  }): StudentEntity {
    const { id, name, email, account, age, career, enrollment_date } = object;
    if (!id) throw new Error("Id is required");

    let newDate;

    if (enrollment_date) {
      newDate = new Date(enrollment_date);
      if (isNaN(newDate.getTime())) {
        throw new Error("Invalid date format");
      }
    }
    return new StudentEntity(
      id,
      name,
      email,
      account,
      age,
      career,
      enrollment_date
    );
  }
}
