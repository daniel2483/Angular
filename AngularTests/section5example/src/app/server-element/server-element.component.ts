import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None   // To remove encapsulation
  //encapsulation: ViewEncapsulation.ShadowDom   // To use the ShadowDom Technology previous was called Native
  encapsulation: ViewEncapsulation.Emulated   // This is the default encapsulation
})
export class ServerElementComponent implements OnInit {
  
  // Creating a custom property binding, and accesible from other components with alias
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
