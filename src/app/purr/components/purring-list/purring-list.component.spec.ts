import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurringListComponent } from './purring-list.component';

describe('PurringListComponent', () => {
  let component: PurringListComponent;
  let fixture: ComponentFixture<PurringListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurringListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PurringListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
