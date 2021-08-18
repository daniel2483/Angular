import { Component, OnInit, EventEmitter , Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // Custom Events example
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value}
    );
    // console.log(nameInput.value); // to see the value of input
    // this.serverCreated.emit({
    //   serverName: nameInput.value, 
    //   serverContent: this.newServerContent}
    // );
    //this.serverCreated.emit({
    //  serverName: this.newServerName, 
    //  serverContent: this.newServerContent}
    //);
    //this.serverElements.push({
    //  type: 'server',
    //  name: this.newServerName,
    //  content: this.newServerContent
    //});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value}
    );
    // this.blueprintCreated.emit({
    //   serverName: nameInput.value, 
    //   serverContent: this.newServerContent}
    // );

    //this.blueprintCreated.emit({
    //  serverName: this.newServerName, 
    //  serverContent: this.newServerContent}
    //);
    //this.serverElements.push({
    //  type: 'blueprint',
    //  name: this.newServerName,
    //  content: this.newServerContent
    //});
  }

}
