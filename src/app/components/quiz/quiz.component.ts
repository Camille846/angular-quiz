import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import questions from '../../../assets/data/questions.json';
@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
    title: string = '';
    questions: any;
    questionSelected: any;
    answers: string[] = [];
    answerSelected: string = '';
    answerImage : string = '';
    questionIndex: number = 0;
    questionMaxIndex: number = 0;
    finished: boolean = false;

    constructor () {}

    ngOnInit() {
       if (questions) {
          this.finished = false;
          this.title = questions.title;
          this.questions = questions.questions;
          this.questionSelected = this.questions[this.questionIndex];
          this.questionIndex = 0;
          this.questionMaxIndex = this.questions.length - 1;
       }

      }
      
      selectOption(value: string) {
         this.answers.push(value);
         this.nextQuestion();
      }

      async nextQuestion() {
        if (this.questionIndex < this.questionMaxIndex) {
          this.questionIndex++;
          this.questionSelected = this.questions[this.questionIndex];
        } else {
          const finalAnswer:string = await this.checkAnswer(this.answers);
          this.finished = true;
          this.answerSelected = questions.results[finalAnswer as keyof typeof questions.results].resultTitle;
          this.answerImage = questions.results[finalAnswer as keyof typeof questions.results].resultImage;
        }
      }

      async checkAnswer(answers: string[]) {
         const result = answers.reduce((prev, curr, i, arr) => { 
            if (arr.filter(item => item === curr).length > 
            arr.filter(item => item == curr).length) {
                return prev;
            } else {
                return curr;
            }
         })

         return result;
      }

      restartQuiz() {
        this.answers = [];
        this.finished = false;
        this.questionIndex = 0;
        this.questionSelected = this.questions[this.questionIndex];
      }

      
}
