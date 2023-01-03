import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PurringActions } from '../../store/purr.actions';
import { PurringListState } from '../../store/purr.reducer';

@Component({
  selector: 'app-purring-creation',
  templateUrl: './purring-creation.component.html',
  styleUrls: ['./purring-creation.component.scss']
})
export class PurringCreationComponent {
  purringContent = new FormControl('', [
    Validators.required,
    Validators.maxLength(140)
  ]);

  constructor(private readonly store: Store<PurringListState>) {}

  postAPurring(): void {
    //this.store.dispatch(PurringActions.postAPurring({}));
  }
}
