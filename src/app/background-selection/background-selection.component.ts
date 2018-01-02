import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Background} from '../background';
import {backgrounds} from '../data/backgrounds/index';
import {Character} from '../character';

@Component({
  selector: 'background-selection',
  templateUrl: './background-selection.component.html',
  styleUrls: ['./background-selection.component.css']
})
export class BackgroundSelectionComponent {
  @Input() character: Character;
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  backgrounds = backgrounds;
  selectedBackground: Background;

  constructor() { }

  getBackgroundLanguageDisplay(){
    let lang = this.selectedBackground.languages.slice();
    if(lang.length < 2){
      return lang[0] + '.';
    } 
    
    let lastTwo = lang.splice(lang.length-2,2).join(' and ');
    lang.push(lastTwo);

    return lang.join(', ') + '.';
  }

  selectBackground(b: Background){
    this.selectedBackground = b;
  }

}
