import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Size, Race, AbilityScores } from '../race';
import { RaceService } from '../race.service';
import { NameService } from '../name.service';
import { Character } from '../character';

@Component({
  selector: 'ability-score-selection',
  templateUrl: './ability-score-selection.component.html',
  styleUrls: ['./ability-score-selection.component.css']
})
export class AbilityScoreSelectionComponent implements OnInit{
  @Output() onComplete: EventEmitter<any> = new EventEmitter();
  @Input() character: Character;

  abilityScoreNames = ['strength','dexterity','constitution','intelligence','wisdom','charisma'];
  racialBonuses: AbilityScores;
  selectedScores: AbilityScores = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0
  }
  availableScores = [15, 14, 13, 12, 10, 8];
  originalAvailable = [15, 14, 13, 12, 10, 8];

  constructor() {}

  ngOnInit(){
    this.racialBonuses = this.character.race.abilityScores;
  }

  selectedScoreChanged(ability: string){
    if(this.selectedScores[ability]){
      this.selectedScores[ability] = Number(this.selectedScores[ability]);
    }
  }

  filterAvailableScores(){
    let used = [];
    for(let i = 0; i < this.abilityScoreNames.length; i++){
      let a = this.abilityScoreNames[i];
      if(this.selectedScores[a] && this.selectedScores[a] !== 'undefined'){
        let score = this.selectedScores[a];
        used.push(score);
      }
    }
    let filtered = this.availableScores.filter((item)=>{
      let usedIndex = used.indexOf(item);
      return usedIndex < 0;
    });
    return filtered;
  }

  getAbilityBonus(score){
    let b = Character.getAbilityModifier(score);
    let out: string;
    if(b >= 0){
      out = '+'+b;
    } else {
      out = b + '';
    }
    return out;
  }

  areAllAbilitiesSelected(){
    for(let i = 0; i < this.abilityScoreNames.length; i++){
      if(this.selectedScores[this.abilityScoreNames[i]] <= 0){
        return false;
      }
    }
    return true;
  }

  submitAbilityScores(){
    let s = this.selectedScores;
    let r = this.character.race.abilityScores;
    let c = this.character.abilityScores;
    this.abilityScoreNames.forEach((name)=>{
      c[name] = s[name] + r[name];
    });
    this.onComplete.emit(true);
  }

}
