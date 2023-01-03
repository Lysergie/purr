import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PurringActions } from '../../store/purr.actions';
import { Purring, PurringListState } from '../../store/purr.reducer';
import { v4 as uuidv4 } from 'uuid';

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
    if (this.purringContent && this.purringContent.value) {
      const newPurring: Purring = {
        id: uuidv4(),
        content: this.purringContent.value,
        likeCounter: 0,
        publicationDate: new Date(),
        alreadyLiked: false
      };
      this.store.dispatch(
        PurringActions.postAPurring({ newPurring: newPurring })
      );
      this.purringContent.setValue('');
    }
  }
}
