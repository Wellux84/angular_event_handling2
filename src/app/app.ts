import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Jsoncomp } from './jsoncomp/jsoncomp';
import { MypipePipe } from './mypipe-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe, Jsoncomp, MypipePipe, CommonModule  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Putkia"
  price: number = 1234.5;
  today: Date = new Date();
  percent: number = 0.3495;
  pipetext: string = "";
  pipedtext: string = "";

  pipeTextInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.pipetext = inputElement.value;
  }

  showPipeText() {
    this.pipedtext = this.pipetext;
  }
}
