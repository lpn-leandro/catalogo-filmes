import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSeriesComponent } from './register-series.component';

describe('RegisterSeriesComponent', () => {
  let component: RegisterSeriesComponent;
  let fixture: ComponentFixture<RegisterSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSeriesComponent]
    });
    fixture = TestBed.createComponent(RegisterSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
