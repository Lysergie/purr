import { createReducer, on } from '@ngrx/store';
import { mockPurrings } from '../mocks/purrings.mock';
import { PurringActions } from './purr.actions';

export const featureKey = 'purr';

export interface Purring {
  id: string;
  content: string;
  likeCounter: number;
  publicationDate: Date;
}

export interface PurringListState {
  purrings: Array<Purring>;
}

export const initialState: PurringListState = {
  purrings: mockPurrings.slice(0, 20)
};

export const purrReducer = createReducer(
  initialState,

  on(PurringActions.postAPurring, (state, action) => state),

  on(PurringActions.likeIncrement, state => state),

  on(PurringActions.likeDecrement, state => state)
);
