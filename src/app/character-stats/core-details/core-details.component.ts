import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Character } from '../../character';
import { AbilityScoreName } from '../../race';
import { Proficiency, ProficiencyCategory } from '../../proficiency';

@Component({
  selector: 'core-details',
  templateUrl: './core-details.component.html',
  styleUrls: ['./core-details.component.css']
})
export class CoreDetailsComponent {
  @Input() character: Character;

  getProficiencies(type: ProficiencyCategory) {
      return this.character.proficiencies
        .filter(item => item.category.toLowerCase() === type.toLowerCase())
        .sort((a, b) => {
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
  }

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
