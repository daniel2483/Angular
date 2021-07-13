import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringInterpolation = 'Hola Mundo!';
  propertyBinding = false;

  constructor(){
    setTimeout(()=>{
      this.propertyBinding = true;
    },2000);
  }

}
