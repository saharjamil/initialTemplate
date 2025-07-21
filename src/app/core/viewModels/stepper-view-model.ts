export class StepperViewModel {
    ID: number;
    Title: string;
    TitleEn: string;
    Icon: string;
    OrderClass?:string;
    Component?: any;
    Condition: boolean;
    IsActive: boolean;

    constructor(init?: Partial<StepperViewModel>) {
        this.ID = init?.ID || 0;
        this.Title = init?.Title || '';
        this.TitleEn = init?.TitleEn || '';
        this.Icon = init?.Icon || '';
        this.OrderClass = init?.OrderClass || '';
        this.Component = init?.Component || null;
        this.Condition = init?.Condition || false;
        this.IsActive = init?.IsActive || false;

    }
}
