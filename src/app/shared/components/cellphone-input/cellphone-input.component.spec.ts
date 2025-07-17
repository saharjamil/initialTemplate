import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphoneInputComponent } from './cellphone-input.component';

describe('CellphoneInputComponent', () => {
  let component: CellphoneInputComponent;
  let fixture: ComponentFixture<CellphoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CellphoneInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CellphoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
