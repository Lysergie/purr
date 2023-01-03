import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurrComponent } from './purr.component';

describe('PurrComponent', () => {
  let component: PurrComponent;
  let fixture: ComponentFixture<PurrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurrComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PurrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
