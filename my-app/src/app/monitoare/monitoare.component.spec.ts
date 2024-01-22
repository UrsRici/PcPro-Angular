import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoareComponent } from './monitoare.component';

describe('MonitoareComponent', () => {
  let component: MonitoareComponent;
  let fixture: ComponentFixture<MonitoareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitoareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonitoareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
