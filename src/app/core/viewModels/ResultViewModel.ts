import { MessageViewModel } from './MessageViewModel';
export class ResultViewModel<T>{
    Message:MessageViewModel;
    List:T[]|undefined;
    Result: T|undefined;
    TotalCount:number;
constructor(message?:MessageViewModel,
            list?:T[],
            totalCount?:number,
            result?:T|undefined){
                this.Message=message|| new MessageViewModel();
                this.List=list|| [];
                this.Result=result||undefined;
                this.TotalCount=totalCount||0;
            }
}