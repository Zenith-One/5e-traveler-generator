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
  selectedBackground: Background = backgrounds[0];

  constructor() { }

  selectBackground(b: Background){
    this.selectedBackground = b;
  }

  finalizeBackground(){
    this.character.setBackground(this.selectedBackground);
    this.onComplete.emit(true);
  }

}
