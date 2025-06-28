import { Component, Input } from '@angular/core';
import { SvgIconConfigViewModel } from '../../../core/viewModels/SvgIconConfigViewModel';

@Component({
  selector: 'app-svg-icon',
  standalone:false,
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss'
})
export class SvgIconComponent {
  @Input() config: SvgIconConfigViewModel = new SvgIconConfigViewModel();
  @Input() name: string = '';
  @Input() size?: number = 24;
  @Input() icon: string = '';
}
