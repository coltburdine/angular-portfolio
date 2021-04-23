import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperIntroductionComponent } from './developer-introduction.component';

describe('DeveloperIntroductionComponent', () => {
  let component: DeveloperIntroductionComponent;
  let fixture: ComponentFixture<DeveloperIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
