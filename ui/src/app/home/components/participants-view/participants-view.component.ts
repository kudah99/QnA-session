import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { UsersState } from '../../store/users.reducer';
import { selectError, selectIsLoading, selectUsers } from '../../store/users.selectors';
import { loadUsers } from '../../store/users.actions';
import { UserModel } from 'src/app/shared/models/user.model';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'src-participants-view',
  templateUrl: './participants-view.component.html',
  styleUrls: ['./participants-view.component.scss'],
  providers: [NzNotificationService]
})
export class ParticipantsViewComponent implements OnInit{

  users$: Observable<UserModel[]>;
  error$: Observable<string>;
  loading$: Observable<boolean>;

  constructor( private store: Store<UsersState>,private notification: NzNotificationService) {

    this.error$ = this.store.select(selectError);
    this.loading$ =this.store.select(selectIsLoading);
    this.users$ = this.store.select(selectUsers)
  }
  copyLink(){
   const host = window.location.hostname+window.location.port
   console.log(host)
    this.notification
      .success(
        'Link copied!',
        'Shared with your audience to invite into your QnA session.'
      )
  }
  parseAvatarUrl(value: string| null): string{
    if (value != null) {
      return value
    } else {
      return "assets/images/user.svg"
    }
  }
  
  ngOnInit() {
    this.store.dispatch(
      loadUsers()
      );
  }
}
