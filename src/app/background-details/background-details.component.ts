import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Background} from '../background';

@Component({
  selector: 'background-details',
  templateUrl: './background-details.component.html',
  styleUrls: ['./background-details.component.css']
})
export class BackgroundDetailsComponent {
  @Input() background: Background;

  constructor() { }

  getLanguageDisplay(){
    let lang = this.background.languages.slice();
    if(lang.length < 2){
      return lang[0] + '.';
    } 
    
    let lastTwo = lang.splice(lang.length-2,2).join(' and ');
    lang.push(lastTwo);

    return lang.join(', ') + '.';
  }


}
