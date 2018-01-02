import { Component } from '@angular/core';

import { Character } from './character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  character: Character;
  step: number = 1;

  handleRaceSelection(character: Character){
    this.character = character;
    this.step++;
  }

  handleAbilitySelection(){
    console.log(this.character);
  }
}
