import { createAction, props } from '@ngrx/store';
import { UserModel } from 'src/app/shared/models/user.model';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users Success',
  props<{ data: UserModel[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users Failure',
  props<{ error: any }>()
);
