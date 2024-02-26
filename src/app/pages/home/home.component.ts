import { Component } from '@angular/core';
import { QuizComponent } from '../../components/quiz/quiz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    finished: boolean = false;
    constructor () {}
    ngOnInit() {
        this.finished = false;
    }

    startQuiz() {
        this.finished = true;
    }
}

