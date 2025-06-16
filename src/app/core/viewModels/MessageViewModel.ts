import { ErrorViewModel } from "./ErrorViewModel";

export class MessageViewModel{
    ID:number;
    Status:string;
    Title: string;
    Message: string;
    Value: string;
    Errors: ErrorViewModel[];
    Dictionary:[{Key:string,Value:string}]

    constructor(
        id?:number,
        status?:string,
        title?: string, 
        message?: string,
        value?:string,
        errors?: ErrorViewModel[],
        dictionary?:[{Key:string,Value:string}]
    ){
        this.ID = id || 0;
        this.Status = status || '';
        this.Title = title || '';
        this.Message = message || '';
        this.Value=value || '';
        this.Errors = errors || [];
        this.Dictionary = dictionary || [{Key: '', Value: ''}]
    }
}