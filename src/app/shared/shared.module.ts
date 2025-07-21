//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { HttpClientModule } from '@angular/common/http';
import { BlockUIModule } from 'ng-block-ui';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

//Directives
import { ClickOutsideDirective } from './directives/click-out-side.directive';
import { RightClickDirective } from './directives/right-click.directive';
import { Ipv4ValidatorDirective } from './directives/ip-validator.directive';
import { PersianLettersOnlyDirective } from './directives/persian-letters-only.directive';
import { MaskitoDirective } from '@maskito/angular';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';

//Components
import { PersianCalendarComponent } from './components/persian-calendar/persian-calendar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ExploreTabComponent } from './components/explore-tab/explore-tab.component';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { BlockUiTemplateComponent } from './components/block-ui-template/block-ui-template.component';
import { FullComponent } from './components/layout/full/full.component';
import { ContentComponent } from './components/layout/content/content.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { JalaliDatePickerComponent } from './components/jalali-date-picker/jalali-date-picker.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
@NgModule({
  declarations: [
    PersianCalendarComponent,
    SvgIconComponent,
    ExploreTabComponent,
    ExpandablePanelComponent,
    ContextMenuComponent,
    FullComponent,
    ContentComponent,
    TextInputComponent,
    JalaliDatePickerComponent,
    TableComponent,
    PaginationComponent,
    StepperComponent,
    NoDataComponent,
    SwitcherComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule,
    CarouselModule,
    AngularEditorModule,
    FileUploadModule,
    HttpClientModule,
    BlockUIModule.forRoot({template: BlockUiTemplateComponent, message:'در حال پردازش؛ شکیبا باشید ...'}),
    NgPersianDatepickerModule,
    SimplebarAngularModule,
    NgxPaginationModule,
    
    ClickOutsideDirective,
    RightClickDirective,
    Ipv4ValidatorDirective,
    PersianLettersOnlyDirective,
    MaskitoDirective,
    MobileValidatorDirective,
    EmailValidatorDirective
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CarouselModule,
    AngularEditorModule,
    FileUploadModule,
    NgPersianDatepickerModule,
    SimplebarAngularModule,
    HttpClientModule,
    BlockUIModule,
    NgxPaginationModule,
    
    ClickOutsideDirective,
    RightClickDirective,
    Ipv4ValidatorDirective,
    PersianLettersOnlyDirective,
    MaskitoDirective,
    MobileValidatorDirective,
    EmailValidatorDirective,
    
    PersianCalendarComponent,
    SvgIconComponent,
    ExpandablePanelComponent,
    ExploreTabComponent,
    ContextMenuComponent,
    TextInputComponent,
    JalaliDatePickerComponent,
    TableComponent,
    PaginationComponent,
    StepperComponent,
    NoDataComponent,
    SwitcherComponent
  ],
  
})
export class SharedModule { }
