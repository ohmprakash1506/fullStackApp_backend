export class customError {
  message!: string;
  status!: number;
  addtionalInfo!: any;

  constructor(message: string, status: number = 500, addtionalInfo: any = {}) {
    this.message = message;
    this.status = status;
    this.addtionalInfo = addtionalInfo;
  }
}
