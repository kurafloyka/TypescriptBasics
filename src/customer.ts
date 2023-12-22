class Customer {
  //   private _firstName: string;
  //   private _lastName: string;

  //   constructor(first: string, last: string) {
  //     this._firstName = first;
  //     this._lastName = last;
  //   }
  constructor(private _firstName: string, private _lastName: string) {}

  public get firstName(): string {
    return this._firstName;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}
export default Customer;
