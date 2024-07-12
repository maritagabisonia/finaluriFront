export class Answer {
    answer: string;
    questionid: number;
  
    constructor(answer: string = '', questionid: number = 0) {
      this.answer = answer;
      this.questionid = questionid;
    }
  }
  