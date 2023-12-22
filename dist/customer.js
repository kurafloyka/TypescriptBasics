class Customer {
    //   private _firstName: string;
    //   private _lastName: string;
    //   constructor(first: string, last: string) {
    //     this._firstName = first;
    //     this._lastName = last;
    //   }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
export default Customer;
