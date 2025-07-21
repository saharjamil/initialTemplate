import { Component, Input, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperViewModel } from '../../../core/viewModels/stepper-view-model';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'app-stepper',
  standalone:false,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input() stepperItems: StepperViewModel[] = [];
  @Input() verticalItems: boolean = false;
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  noData: boolean = false;
  ngOnInit() {
    this.openStepperContent(this.stepperItems[0])
  }
  openStepperContent(stepperItem: StepperViewModel) {
    this.deactiveAllItems();
    stepperItem.IsActive = true;
    this.container.clear();
    
    if (stepperItem.Component) {
      this.noData = false;
      if (stepperItem.Component instanceof TemplateRef) {
    // ✅ Insert the template
    this.container.createEmbeddedView(stepperItem.Component);
  } else {
    // ✅ Create the component
    this.container.createComponent(stepperItem.Component as Type<any>);
  }
      // this.container.createComponent(stepperItem.Component);
    }
    else {
      this.noData = true;
    }
  }

  deactiveAllItems() {
    this.stepperItems.forEach(item => {
      item.IsActive = false;
    })
  }

}
