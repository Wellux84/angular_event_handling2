import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Putkia"
  price: number = 1234.5;
  today: Date = new Date();
  percent: number = 0.3495;
}
