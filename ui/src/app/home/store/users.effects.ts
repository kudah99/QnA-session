import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UsersActions from './users.actions';
import { UserService } from 'src/app/shared/service/user.service';
import { UserModel } from 'src/app/shared/models/user.model';



@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() => {
        return this.usersService.getfakeUsers().pipe(
          map((tokens) =>
            UsersActions.loadUsersSuccess({ data: tokens as UserModel[] })
          ),
          catchError((error) =>
            of(UsersActions.loadUsersFailure({ error: error})) 
          )
        );
      })
    )
  );

  loadUsersSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersActions.loadUsersSuccess),
        tap(({ data }) => {
          console.log(data)
        })
      ),
    { dispatch: false }
  );
  
  loadUsersFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersActions.loadUsersFailure),
        tap(({ error }) => {
         console.log(error);
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private usersService: UserService) {

  }
}
