import { Component } from '@angular/core';
import { Sample } from '../sample';

@Component({
  selector: 'datasharing-child',
  template: ` <h4>passing data from child to parent <h4>
    <label>value to be passed</label>
    <input type="text" #childtxt (keyup)="0">
    <p> value passed from parent to child</p>
    {{parentdata}}
    <datasharing-parent 
      [name]="childtxt.value"
      (passdata)="parentdata = $event">
    </datasharing-parent>`
})


export class DataSharingChildComponent {
  childdata: string;
  parentdata: string;
}
