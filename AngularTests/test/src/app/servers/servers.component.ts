import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  server: string = "Server1"
  status: boolean = false
  ip: string = "100.230.230.15" 

  constructor() { }

  ngOnInit(): void {
  }

}
