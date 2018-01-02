import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Size, Race, AbilityScores } from '../race';
import { RaceService } from '../race.service';
import { NameService } from '../name.service';
import { Character } from '../character';

@Component({
  selector: 'name-selection',
  templateUrl: './name-selection.component.html',
  styleUrls: ['./name-selection.component.css']
})
export class NameSelectionComponent {
  @Input() character: Character;
  @Output() onComplete: EventEmitter<any> = new EventEmitter();

  sex: 'Male' | 'Female';
  nameSuggestions: string[];
  nameSuggestionsLoading: boolean = false;
  name: string;

  constructor(private nameService: NameService) { }

  suggestNames(){
    let race = this.character.race;
    let sex = this.sex;
    this.nameSuggestionsLoading = true;
    this.nameSuggestions = [];
    let namesPromise;
    if(race.naming.sexAgnostic){
      namesPromise = this.nameService.getNames(race.naming.race);
    } else {
      namesPromise = this.nameService.getNames(race.naming.race, sex);
    }
    namesPromise.then((names)=>{
      this.nameSuggestionsLoading = false;
      this.nameSuggestions = names;
    }).catch((arg1, arg2, arg3)=>{
      this.nameSuggestionsLoading = false;
      console.log('something went wrong...',arg1, arg2, arg3);
    });
  }

  selectSex(sex: 'Male' | 'Female'){
    this.sex = sex;
    this.suggestNames();
  }

  selectName(n: string){
    this.name = n;
  }

  lockInName(){
    this.character.setSex(this.sex);
    this.character.setName(this.name);
    this.onComplete.emit(true);
  }

}
