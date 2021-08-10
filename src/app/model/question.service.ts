import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Question } from "./question";
import { Review } from "./review";

@Injectable()
export class QuestionService {
  answerArray: string[];
  rtyu: Array<Object>;
  ansObj: Array<Review>;
  constructor(private _httpClient: HttpClient) {}

  getAllQuestions(): Observable<Question[]> {
    return this._httpClient
      .get<any>("http://localhost:4200/assets/data.json")
      .pipe(map((data) => data.questions));
  }

  setArray(answerArray: string[]): void {
    this.answerArray = answerArray;
  }

  getMessage(): string {
    return "hello the message";
  }

  getArray(): string[] {
    return this.answerArray;
  }

  getQuestionList(): Array<Object> {
    return this.rtyu;
  }

  setQuestionList(rtyu: Array<Object>): void {
    this.rtyu = rtyu;
  }

  getAnsObj(): Array<Review> {
    return this.ansObj;
  }

  setAnsObj(ansObj: Array<Review>): void {
    this.ansObj = ansObj;
  }
}
