export class UpdateStudentDto {
  private constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly email?: string,
    public readonly account?: number,
    public readonly age?: number,
    public readonly career?: string,
    public readonly enrollment_date?: Date
  ) {}

  get values() {
    const returnObject: { [key: string]: any } = {};
    if (this.name) returnObject.name = this.name;
    if (this.email) returnObject.email = this.email;
    if (this.account) returnObject.account = this.account;
    if (this.age) returnObject.age = this.age;
    if (this.career) returnObject.career = this.career;
    if (this.enrollment_date)
      returnObject.enrollment_date = this.enrollment_date;
    return returnObject;
  }

  static update(props: { [key: string]: any }): [string?, UpdateStudentDto?] {
    const { id, name, email, account, age, career } = props;
    let { enrollment_date } = props;

    //No  vienen los datos
    if (!id) return ["id property is required", undefined];
    if (!name || typeof age !== "number")
      return ["id property is required", undefined];
    //validar que sea un email
    if (!!email && !email.includes("@"))
      return ["Email property is not valid", undefined];
    //vaidar que sea un numero
    if (!!account && (isNaN(account) || typeof age !== "number"))
      return ["Account property must be a number", undefined];

    if (!!age && (isNaN(age) || typeof age !== "number"))
      return ["Age property must be a number", undefined];

    enrollment_date = !!enrollment_date
      ? new Date(enrollment_date)
      : enrollment_date;
    return [
      undefined,
      new UpdateStudentDto(
        id,
        name,
        email,
        account,
        age,
        career,
        enrollment_date
      ),
    ];
  }
}
