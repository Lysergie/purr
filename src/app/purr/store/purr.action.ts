import { createAction, props } from '@ngrx/store';
import { Purring } from './purr.reducer';

export namespace PurringActions {
  export const postAPurring = createAction(
    '[Purring Component] Post a Purring',
    props<{ purring: Purring }>()
  );
  export const likeIncrement = createAction(
    '[Purring Component] Like increment'
  );
  export const likeDecrement = createAction(
    '[Purring Component] Like decrement'
  );
}
