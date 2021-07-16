import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  stringInterpolation = 'Hola Mundo!';
  propertyBinding = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Server Test'
  serverCreated = false;

  constructor(){
    setTimeout(()=>{
      this.propertyBinding = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreated = true
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
