import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuestionsState } from './questions.reducer';

export const selectUsersState = createFeatureSelector<QuestionsState>('questions');

export const selectQuestions = createSelector(
  selectUsersState,
  (state) => state.data
);

export const selectIsLoading = createSelector(
  selectUsersState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectUsersState,
  (state) => state.error
);