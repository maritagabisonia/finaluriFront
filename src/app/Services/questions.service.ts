import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from '../Models/Question';
import { Observable } from 'rxjs';
import { UserForm } from '../Models/UserForm ';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questions: Question[] = []

  constructor(public http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    console.log(1)
    return this.http.get<Question[]>("https://localhost:7189/api/User/get_questions");

  };

  addQuestion(question:Question): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>("https://localhost:7189/api/User/add_question", question , httpOptions);
  };


  updateQuestion(question:Question): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.put<any>("https://localhost:7189/api/User/update_questions", question , httpOptions);
  }
  parseJsonAnswers(userForms: UserForm[]): Observable<any> {
    console.log(userForms)
    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    };
    return this.http.post<any>(`https://localhost:7189/api/User/parse_json_answers`, userForms, httpOptions);
  }



  get QuestionsList(): Question[] {
    return this.questions
  }
  set QuestionsList(list: Question[]) {
    this.questions = list;
  }
}
