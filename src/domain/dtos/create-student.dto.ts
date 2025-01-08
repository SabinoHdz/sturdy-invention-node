export class CreateStudentDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly account: number,
    public readonly age: number,
    public readonly career: string,
    public readonly enrollment_date: Date
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateStudentDto?] {
    const { name, email, account, age, career } = props;
    let { enrollment_date } = props;
    //No  vienen los datos
    if (!name) return ["Name property is required", undefined];
    if (!email) return ["Email property is required", undefined];
    if (!account) return ["Account property is required", undefined];
    if (!age) return ["Age property is required", undefined];
    if (!career) return ["Career property is required", undefined];
    if (!enrollment_date)
      return ["Enrollment_date property is required", undefined];

    //validar que sea un email
    if (!email.includes("@")) return ["Email property is not valid", undefined];
    //vaidar que sea un numero
    if (isNaN(account) || typeof age !== "number")
      return ["Account property must be a number", undefined];

    if (isNaN(age) || typeof age !== "number")
      return ["Age property must be a number", undefined];

    enrollment_date = new Date(enrollment_date);
    return [
      undefined,
      new CreateStudentDto(name, email, account, age, career, enrollment_date),
    ];
  }
}
