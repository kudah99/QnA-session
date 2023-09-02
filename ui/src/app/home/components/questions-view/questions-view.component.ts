import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { QuestionModel } from 'src/app/shared/models/question.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { selectError, selectIsLoading, selectQuestions } from '../../store/questions.selectors';
import { selectUsers } from '../../store/users.selectors';
import { QuestionsState } from '../../store/questions.reducer';
import { loadQuestions } from '../../store/questions.actions';
import { UsersState } from '../../store/users.reducer';
import { loadUsers } from '../../store/users.actions';


@Component({
  selector: 'src-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.scss'],
})
export class QuestionsViewComponent implements OnInit{
  users$: Observable<UserModel[]>;
  questions$: Observable<QuestionModel[]>;
  error$: Observable<string>;
  loading$: Observable<boolean>;
  users: UserModel[]= []

  constructor( private store: Store<QuestionsState>, private store_1: Store<UsersState>) {

    this.error$ = this.store.select(selectError);
    this.loading$ =this.store.select(selectIsLoading);
    this.users$ = this.store.select(selectUsers);
    this.questions$ = this.store.select(selectQuestions)
  }

  getUserName(id: number):string{
    this.users$.subscribe({
      next: (data: UserModel[])=>{
        this.users = data;
      }
    });
    if (this.users.length !=0) {
       for (let index = 0; index < this.users.length; index++) {
         if(this.users[index].id == id){
          return this.users[index].first_name
         }
         
       }
       return ""
    } else {
      return ""
    }

  }
  hasAvatar(value: number){
    if (value == 1) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
    this.store.dispatch(
      loadQuestions()
      );
      this.store_1.dispatch(
        loadUsers()
        );
  }
  }
