import { ActionReducerMap} from '@ngrx/store';
import { UsersState, Usersreducer } from '../home/store/users.reducer';
import { UsersEffects } from '../home/store/users.effects';
import { QuestionsState, questionReducer } from '../home/store/questions.reducer';
import { QuestionsEffects } from '../home/store/questions.effects';
//import { storeFreeze } from 'ngrx-store-freeze';
//import { environment } from '../../environments/environment';

export interface AppState {
  users: UsersState;
  questions: QuestionsState
}

export const reducers: ActionReducerMap<AppState> = {
  users: Usersreducer,
  questions: questionReducer
};

//export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];

export const effects = [
  UsersEffects,
  QuestionsEffects
];
