import { Component, Input } from '@angular/core';
import { SampleViewModel } from '../../../../core/viewModels/sample-view-model';

@Component({
  selector: 'app-sample-detail',
  standalone:false,
  templateUrl: './sample-detail.component.html',
  styleUrl: './sample-detail.component.scss'
})
export class SampleDetailComponent {
  @Input() DATA: SampleViewModel = new SampleViewModel();
}
