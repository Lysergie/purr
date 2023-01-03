import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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

  displayMore(): void {
    // this.store.dispatch();
  }
}
