import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-jsoncomp',
  imports: [CommonModule, JsonPipe],
  templateUrl: './jsoncomp.html',
  styleUrl: './jsoncomp.css',
})
export class Jsoncomp {
  testObject = { name: 'Sam', age: 51, job: 'Teacher' };
  testArray = [5, 15, 53, 1, 2];
}
