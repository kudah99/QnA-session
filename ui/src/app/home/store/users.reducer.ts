import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { UserModel } from 'src/app/shared/models/user.model';

export const usersFeatureKey = 'users';

export interface UsersState {
  data: UserModel[];
  error: string;
  loading: boolean;
}

export const initialState: UsersState = {
  data: [],
  error: '',
  loading: false,
};

export const Usersreducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(UsersActions.loadUsersSuccess, (state, { data }) => ({
    ...state,
    data: data,
    error: '',
    loading: false,
  })),

  on(UsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
