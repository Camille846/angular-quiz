import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
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

