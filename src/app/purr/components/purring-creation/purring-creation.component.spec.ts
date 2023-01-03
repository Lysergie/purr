import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurringCreationComponent } from './purring-creation.component';

describe('PurringCreationComponent', () => {
  let component: PurringCreationComponent;
  let fixture: ComponentFixture<PurringCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurringCreationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PurringCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
