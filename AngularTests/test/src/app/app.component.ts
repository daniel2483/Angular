import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/forms';
import { NgModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
             BrowserModule,
             FormsModule      //<----------make sure you have added this.
           ]
})

export class AppComponent {
  stringInterpolation = 'Hola Mundo!';
  propertyBinding = false;
  serverCreationStatus = 'No server was created!'
  serverName = 'Test'

  constructor(){
    setTimeout(()=>{
      this.propertyBinding = true;
    },2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
  }

  onUpdateServerName(event: any){
    console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
