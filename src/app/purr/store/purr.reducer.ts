import { createReducer, on } from '@ngrx/store';
import { mockPurrings } from '../mocks/purrings.mock';
import { PurringActions } from './purr.actions';

export const featureKey = 'purr';

export interface Purring {
  id: string;
  content: string;
  likeCounter: number;
  publicationDate: Date;
  alreadyLiked: boolean;
}

export interface PurringListState {
  purrings: Array<Purring>;
}

export const initialState: PurringListState = {
  purrings: mockPurrings.slice(0, 5)
};

export const purrReducer = createReducer(
  initialState,

  on(PurringActions.postAPurring, (state, { newPurring }) => ({
    purrings: [newPurring, ...state.purrings]
  })),

  on(PurringActions.updatePurringLikeCounter, (state, { purringToUpdate }) => ({
    purrings: state.purrings.map((purring: Purring) => {
      if (purring.id === purringToUpdate.id) return { ...purringToUpdate };
      else {
        return purring;
      }
    })
  })),

  on(PurringActions.displayMorePurrings, (state, { offset }) => ({
    purrings: [...state.purrings, ...mockPurrings.slice(offset, offset + 5)]
  }))
);
