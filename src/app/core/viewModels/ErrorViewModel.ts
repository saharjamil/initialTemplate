export class ErrorViewModel{
   
  ErrorCode: string;
  ErrorMessage: string;
  

  constructor(
      errorCode?: string,
      errorMessage?:string
  ){
     
      this.ErrorCode = errorCode || '';
      this.ErrorMessage = errorMessage || '';
     
  }
}