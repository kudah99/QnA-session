import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionModel } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getfakeQns() {
    return this.http.get<QuestionModel[]>('http://localhost:4200/assets/mockQns.json');
  }

  getQns() {
    // TODO: get real questions from api
  }
}
