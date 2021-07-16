import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  styles: [`
    .online {
      color: white;
    }
    `]
})
export class ServersComponent implements OnInit {
  serverStatus: string = 'offline';
  

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
