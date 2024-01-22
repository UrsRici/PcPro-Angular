import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerifericeComponent } from './periferice.component';

describe('PerifericeComponent', () => {
  let component: PerifericeComponent;
  let fixture: ComponentFixture<PerifericeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerifericeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerifericeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
