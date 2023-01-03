import { createAction, props } from '@ngrx/store';
import { Purring } from './purr.reducer';

export namespace PurringActions {
  export const postAPurring = createAction(
    '[Purring Component] Post a Purring',
    props<{ purring: Purring }>()
  );
  export const updatePurringLikeCounter = createAction(
    '[Purring Component] Like counter update',
    props<{ purringToUpdate: Purring }>()
  );
}
