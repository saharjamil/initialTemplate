import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseExploreTabComponent } from './how-to-use-explore-tab.component';

describe('HowToUseExploreTabComponent', () => {
  let component: HowToUseExploreTabComponent;
  let fixture: ComponentFixture<HowToUseExploreTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowToUseExploreTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToUseExploreTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
