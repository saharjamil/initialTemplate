import { EventViewModel } from "./event-view-model";

export class CalendarDimensionViewModel {
  ID: number;
  Date: string;
  GregDate: string;
  GregKey: number;
  JalaliDate: string;
  HijriDate: string;
  HijriKey: number;
  YearKey: number;
  YearName: string;
  SeasonKey: number;
  SeasonName: string;
  MonthKey: number;
  MonthName: string;
  WeekOfYearKey: number;
  DayOfWeekKey: number;
  DayOfWeekName: string;
  DayKey: number;
  DayName: string;
  DayOfYearKey: number;
  JalaliAlphabetic: string;
  GregYearKey: number;
  GregSeasonKey: number;
  GregMonthKey: number;
  GregWeekKey: number;
  GregDayKey: number;
  GregSeasonName: string;
  GregSeasonNameFa: string;
  GregMonthName: string;
  GregMonthNameFa: string;
  SeasonIndex: number;
  MonthIndex: number;
  WeekIndex: number;
  DayIndex: number;
  WorkdayIndex: number;
  MidYear: number;
  MidSeason: number;
  MidMonth: number;
  IsHoliday: boolean;
  IsWorkDay: boolean;
  IsFirstOfYear: boolean;
  IsLastOfYear: boolean;
  IsFirstOfSeason: boolean;
  IsLastOfSeason: boolean;
  IsFirstOfMonth: boolean;
  IsLastOfMonth: boolean;
  IsFirstOfWeek: boolean;
  IsLastOfWeek: boolean;
  IsLeap: boolean;
  Identifier: string;
  Hash: string;
  Time: string;
  IsActive: boolean;
  Events: EventViewModel[];
  StringJalaliDateTime?: string;
  constructor(
    id?: number,
    date?: string,
    gregDate?: string,
    gregKey?: number,
    jalaliDate?: string,
    hijriDate?: string,
    hijriKey?: number,
    yearKey?: number,
    yearName?: string,
    seasonKey?: number,
    seasonName?: string,
    monthKey?: number,
    monthName?: string,
    weekOfYearKey?: number,
    dayOfWeekKey?: number,
    dayOfWeekName?: string,
    dayKey?: number,
    dayName?: string,
    dayOfYearKey?: number,
    jalaliAlphabetic?: string,
    gregYearKey?: number,
    gregSeasonKey?: number,
    gregMonthKey?: number,
    gregWeekKey?: number,
    gregDayKey?: number,
    gregSeasonName?: string,
    gregSeasonNameFa?: string,
    gregMonthName?: string,
    gregMonthNameFa?: string,
    seasonIndex?: number,
    monthIndex?: number,
    weekIndex?: number,
    dayIndex?: number,
    workdayIndex?: number,
    midYear?: number,
    midSeason?: number,
    midMonth?: number,
    isHoliday?: boolean,
    isWorkDay?: boolean,
    isFirstOfYear?: boolean,
    isLastOfYear?: boolean,
    isFirstOfSeason?: boolean,
    isLastOfSeason?: boolean,
    isFirstOfMonth?: boolean,
    isLastOfMonth?: boolean,
    isFirstOfWeek?: boolean,
    isLastOfWeek?: boolean,
    isLeap?: boolean,
    identifier?: string,
    hash?: string,
    time?: string,
    isActive?: boolean,
    events?: EventViewModel[],
    stringJalaliDateTime?:string,

  )
{
  this.ID = id || 0;
  this.Date = date || '' ;
  this.GregDate = gregDate || '' ;
  this.GregKey = gregKey|| 0 ;
  this.JalaliDate = jalaliDate|| '';
  this.HijriDate = hijriDate|| '' ;
  this.HijriKey = hijriKey|| 0;
  this.YearKey = yearKey|| 0;
  this.YearName = yearName || '';
  this.SeasonKey = seasonKey || 0;
  this.SeasonName = seasonName || '';
  this.MonthKey = monthKey || 0;
  this.MonthName = monthName|| '';
  this.WeekOfYearKey = weekOfYearKey|| 0;
  this.DayOfWeekKey =dayOfWeekKey || 0;
  this.DayOfWeekName = dayOfWeekName || '';
  this.DayKey = dayKey|| 0;
  this.DayName = dayName || '';
  this.DayOfYearKey = dayOfYearKey || 0 ;
  this.JalaliAlphabetic =  jalaliAlphabetic||'' ;
  this.GregYearKey = gregYearKey || 0;
  this.GregSeasonKey = gregSeasonKey ||0 ;
  this.GregMonthKey = gregMonthKey|| 0;
  this.GregWeekKey =gregWeekKey || 0;
  this.GregDayKey = gregDayKey || 0;
  this.GregSeasonName = gregSeasonName || '';
  this.GregSeasonNameFa = gregSeasonNameFa || '';
  this.GregMonthName =gregMonthName || '';
  this.GregMonthNameFa = gregMonthNameFa|| '' ;
  this.SeasonIndex = seasonIndex || 0;
  this.MonthIndex = monthIndex|| 0;
  this.WeekIndex =weekIndex || 0;
  this.DayIndex = dayIndex|| 0;
  this.WorkdayIndex = workdayIndex || 0 ;
  this.MidYear = midYear|| 0;
  this.MidSeason = midSeason|| 0;
  this.MidMonth = midMonth|| 0;
  this.IsHoliday = isHoliday|| true;
  this.IsWorkDay = isWorkDay|| true;
  this.IsFirstOfYear = isFirstOfYear|| true;
  this.IsLastOfYear =isLastOfYear || true;
  this.IsFirstOfSeason = isFirstOfSeason|| true;
  this.IsLastOfSeason =isLastOfSeason || true;
  this.IsFirstOfMonth = isFirstOfMonth || true;
  this.IsLastOfMonth = isLastOfMonth || true;
  this.IsFirstOfWeek = isFirstOfWeek|| true;
  this.IsLastOfWeek =isLastOfWeek || true;
  this.IsLeap = isLeap|| true;
  this.Identifier = identifier|| '';
  this.Hash = hash|| '';
  this.Time = time|| '';
    this.IsActive = isActive || true;
    this.Events = events || [];
    this.StringJalaliDateTime = stringJalaliDateTime || '';
  }
}
