import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as QuestionsActions from './questions.actions';
import { QuestionService } from 'src/app/shared/service/question.service';
import { QuestionModel } from 'src/app/shared/models/question.model';



@Injectable()
export class QuestionsEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionsActions.loadQuestions),
      mergeMap(() => {
        return this.qsnsService.getfakeQns().pipe(
          map((data) =>
            QuestionsActions.loadQuestionsSuccess({ data: data as QuestionModel[] })
          ),
          catchError((error) =>
            of(QuestionsActions.loadQuestionsFailure({ error: error})) 
          )
        );
      })
    )
  );

  loadQuestionsSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuestionsActions.loadQuestionsSuccess),
        tap(({ data }) => {
          console.log(data)
        })
      ),
    { dispatch: false }
  );
  
  loadQuestionsFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(QuestionsActions.loadQuestionsFailure),
        tap(({ error }) => {
         console.log(error);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private qsnsService: QuestionService) {

  }
}
