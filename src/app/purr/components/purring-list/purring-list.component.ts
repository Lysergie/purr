import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PurringActions } from '../../store/purr.actions';
import { Purring, PurringListState } from '../../store/purr.reducer';
import { selectPurrings } from '../../store/purr.selector';

@Component({
  selector: 'app-purring-list',
  templateUrl: './purring-list.component.html',
  styleUrls: ['./purring-list.component.scss']
})
export class PurringListComponent {
  purrings$!: Observable<Array<Purring>>;

  constructor(private readonly store: Store<PurringListState>) {
    this.purrings$ = this.store.select(selectPurrings);
  }

  displayMore(numberOfPurrings: number): void {
    this.store.dispatch(
      PurringActions.displayMorePurrings({ offset: numberOfPurrings })
    );
  }
}
