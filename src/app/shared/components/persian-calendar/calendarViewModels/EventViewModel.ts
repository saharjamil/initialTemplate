export class EventViewModel{
    ID: number;
    DayKey: number;
    MonthKey: number;
    IsHoliday: boolean;
    CalenderType: string;// Hijri-Greg-Jalali // H-G-J
    Title: string;
    IsActive: boolean;
    Events: string;
    constructor(
        id?: number,
        dayKey?: number,
        monthKey?: number,
        calenderType?: string,
        title?: string,
        isActive?:boolean,
        isHoliday?: boolean,
        events?: string,
    ) {
        this.ID = id || 0;
        this.DayKey = dayKey || 0;
        this.IsHoliday = isHoliday || false;
        this.Events = events || '';
        this.MonthKey = monthKey || 0;
        this.CalenderType = calenderType || '';
        this.Title = title || '';
        this.IsActive = isActive || false;
    }
}