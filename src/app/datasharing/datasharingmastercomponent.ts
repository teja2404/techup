import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sample } from '../sample';

@Component({
  selector: 'datasharing-parent',
  template: `<h3>passing data from parent to child <h5>
    <label>value to be passed</label>
    <input type="text" #parenttxt (keyup)="passvalue(parenttxt.value)">
    <p> value passed from child to parent</p>
    {{name}}
    `
})

export class DataSharingMasterComponent {

  @Input() name: string;
  @Output() passdata = new EventEmitter<string>();
  voted = false;

  passvalue(data: string) {
    this.passdata.emit(data);
  }
}


