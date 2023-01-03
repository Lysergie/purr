import { createSelector } from '@ngrx/store';
import { PurringListState, featureKey } from './purr.reducer';

export const selectFeature = (state: any): PurringListState =>
  state[featureKey];

export const selectPurrings = createSelector(
  selectFeature,
  (state: PurringListState) => state.purrings
);
