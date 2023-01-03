import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurringComponent } from './purring.component';

describe('PurringComponent', () => {
  let component: PurringComponent;
  let fixture: ComponentFixture<PurringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurringComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PurringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
