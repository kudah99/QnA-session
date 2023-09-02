import { createReducer, on } from '@ngrx/store';
import * as QuestionsActions from './questions.actions';
import { QuestionModel } from 'src/app/shared/models/question.model';

export const questionsFeatureKey = 'questions';

export interface QuestionsState {
  data: QuestionModel[],
  error: string,
  loading: boolean
}


export const initialState: QuestionsState= {
  data: [],
  error: '',
  loading: false
};;

export const questionReducer = createReducer(
  initialState,
  on(QuestionsActions.loadQuestions, (state) => ({
    ...state,
    loading: true,
    error: '',
  })),

  on(QuestionsActions.loadQuestionsSuccess, (state, { data }) => ({
    ...state,
    data: data,
    error: '',
    loading: false,
  })),

  on(QuestionsActions.loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);

