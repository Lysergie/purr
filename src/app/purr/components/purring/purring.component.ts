import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PurringActions } from '../../store/purr.actions';
import { Purring, PurringListState } from '../../store/purr.reducer';

@Component({
  selector: 'app-purring',
  templateUrl: './purring.component.html',
  styleUrls: ['./purring.component.scss']
})
export class PurringComponent {
  @Input() purring?: Purring;

  constructor(private readonly store: Store<PurringListState>) {}

  performLike(): void {
    if (this.purring) {
      var purringToUpdate: Purring = this.purring;
      this.store.dispatch(
        PurringActions.updatePurringLikeCounter({
          purringToUpdate: {
            ...purringToUpdate,
            likeCounter: purringToUpdate.alreadyLiked
              ? purringToUpdate!.likeCounter - 1
              : purringToUpdate!.likeCounter + 1,
            alreadyLiked: !purringToUpdate.alreadyLiked
          }
        })
      );
    }
  }
}
