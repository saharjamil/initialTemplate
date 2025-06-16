export class SvgIconConfigViewModel {
    Size: number;
    FillColor: string;
    StrokeColor: string;
    IconName: string;
    constructor(
        size?: number,
        fillColor?: string,
        strokeColor?: string,
        iconName?: string,
    ) {
        this.Size = size || 24;
        this.FillColor = fillColor || 'none';
        this.StrokeColor = strokeColor || '#898989';
        this.IconName = iconName || '';
    }

}
