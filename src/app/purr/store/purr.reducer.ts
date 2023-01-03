import { createReducer, on } from '@ngrx/store';
import { PurringActions } from './purr.action';

export interface Purring {
  id: string;
  content: string;
  likeCounter: number;
  publicationDate: Date;
}

export interface PurringsListState {
  purrings: Array<Purring>;
}

export const initialState: PurringsListState = {
  purrings: [] //TODO: mettre le json ici
};

export const purrReducer = createReducer(
  initialState,

  on(PurringActions.postAPurring, (state, action) => state),

  on(PurringActions.likeIncrement, state => state),

  on(PurringActions.likeDecrement, state => state)
);
