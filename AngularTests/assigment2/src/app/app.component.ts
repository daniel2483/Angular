import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assigment2';
  username = ''
  resetButtonDisable = true;

  onUpdateUserName(event: any){
    this.username = (<HTMLInputElement>event.target).value;
  }

  checkIfEmpty(){
    if (this.username != ''){
      this.resetButtonDisable = false;
    }
    else{
      this.resetButtonDisable = true;
    }
  }

  resetValue(){
    this.username = '';
    this.resetButtonDisable = true;
  }

}
