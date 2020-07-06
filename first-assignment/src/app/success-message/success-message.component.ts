import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css'],
  styles: [`
        p {
          background-color: lightgreen;
          border: 1px solid green;
          padding: 10px;
        }`]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
