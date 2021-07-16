import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
      .paragraphBlue {
        background-color: blue;
      }
      `]
})
export class AppComponent {
  title = 'assigment3';
  text = "Hi my name is Daniel!";

  paragraphsLessThanFive = [];
  paragraphsNoreThanFive = [];
  number = [1];
  color = '';
  moreThanFive = false;
  fiveOrLess = true;
  paragraph = '';
  counter = 1;



  createNewParagraph(){
    //this.paragraphs.push(this.paragraphsBelow5[0]);
    this.paragraph = "Number " + this.counter + " : " + this.text;

    if (this.counter >= 5) {
      this.paragraphsNoreThanFive.push(this.paragraph);
      this.moreThanFive = true;
      this.fiveOrLess = false;
    }
    else {
      this.paragraphsLessThanFive.push(this.paragraph);
    }
    this.counter++;
    this.number.push(this.counter);
  }

  getColor(){
    return this.moreThanFive === true ? 'white' : 'black'
  }

}
