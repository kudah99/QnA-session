import { createAction, props } from '@ngrx/store';
import { QuestionModel } from 'src/app/shared/models/question.model';

export const loadQuestions = createAction(
  '[Questions] Load Questions'
);

export const loadQuestionsSuccess = createAction(
  '[Questions] Load Questions Success',
  props<{ data: QuestionModel[] }>()
);

export const loadQuestionsFailure = createAction(
  '[Questions] Load Questions Failure',
  props<{ error: any }>()
);
