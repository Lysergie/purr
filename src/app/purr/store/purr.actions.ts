import { createAction, props } from '@ngrx/store';
import { Purring } from './purr.reducer';

export namespace PurringActions {
  export const postAPurring = createAction(
    '[Purring Creation Component] Post a Purring',
    props<{ newPurring: Purring }>()
  );
  export const updatePurringLikeCounter = createAction(
    '[Purring Component] Like counter update',
    props<{ purringToUpdate: Purring }>()
  );
  export const displayMorePurrings = createAction(
    '[Purring List Component] More',
    props<{ offset: number }>()
  );
}
