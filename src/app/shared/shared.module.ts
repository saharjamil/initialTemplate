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
//Components
import { PersianCalendarComponent } from './components/persian-calendar/persian-calendar.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ExploreTabComponent } from './components/explore-tab/explore-tab.component';
import { ExpandablePanelComponent } from './components/expandable-panel/expandable-panel.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
//Directives
import { ClickOutsideDirective } from './directives/click-out-side.directive';
import { RightClickDirective } from './directives/right-click.directive';
@NgModule({
  declarations: [
    PersianCalendarComponent,
    SvgIconComponent,
    ExploreTabComponent,
    ExpandablePanelComponent,
    ContextMenuComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    CarouselModule,
    AngularEditorModule,
    FileUploadModule,
    NgPersianDatepickerModule,
    SimplebarAngularModule,
    ClickOutsideDirective,
    RightClickDirective
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
    ClickOutsideDirective,
    RightClickDirective,
    PersianCalendarComponent,
    SvgIconComponent,
    ExpandablePanelComponent,
    ExploreTabComponent,
    ContextMenuComponent
  ],
  
})
export class SharedModule { }
