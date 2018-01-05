import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Character } from '../../character';
import { AbilityScoreName } from '../../race';

@Component({
  selector: 'core-details',
  templateUrl: './core-details.component.html',
  styleUrls: ['./core-details.component.css']
})
export class CoreDetailsComponent {
  @Input() character: Character;

  constructor() { }

  getAbilityScoreDisplay(ability: AbilityScoreName): string[] {
    return [this.character.abilityScores[ability]+'', this.getAbilityBonus(ability)];
  }

  getAbilityBonus(ability: AbilityScoreName): string {
      let mod = Character.getAbilityModifier(this.character.abilityScores[ability]);
      let out: string;
      if(mod >= 0){
          out = '+'+mod;
      } else {
          out = '' + mod;
      }
      return out;
  }
}
