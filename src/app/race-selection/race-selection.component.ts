import { Component, Output, EventEmitter } from '@angular/core';

import { Size, Race } from '../race';
import { RaceService } from '../race.service';
import { NameService } from '../name.service';
import { Character } from '../character';

@Component({
  selector: 'race-selection',
  templateUrl: './race-selection.component.html',
  styleUrls: ['./race-selection.component.css']
})
export class RaceSelectionComponent  {
  @Output() onComplete: EventEmitter<Character> = new EventEmitter();

  name: string;
  sex: 'Male' | 'Female';
  nameSuggestions: string[];
  nameSuggestionsLoading: boolean = false;
  selected: string;
  selectedRace: Race;
  races = RaceService.races;

  constructor(private raceService: RaceService, private nameService: NameService){}

  selectedChanged(){
    this.selectedRace = this.races.filter((r) => r.name === this.selected)[0];
    this.nameSuggestions = undefined;
  }

  sexChanged(){
    this.nameSuggestions = undefined;
  }

  suggestedNameClick(name: string){
    this.name = name;
  }

  getAverageSize(){
    return RaceService.getAverageSize(this.selectedRace);
  }

  getHeightDisplay(s: Size){
    return RaceService.getHeightDisplay(s);
  }

  suggestNames(race: Race, sex: 'Male' | 'Female'){
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

  getSelectedRaceAbilityScoreMods(){
    let mods = RaceService.getAbilityModifiers(this.selectedRace);
    return mods.map((item)=>{
      let name = item.name.substr(0,1).toUpperCase() + item.name.substr(1);
      let value = item.value > 0 ? '+' + item.value : item.value;
      return name + ' ' + value;
    }).join(', ');
  }

  readyForSubmit(){
    return this.selectedRace && this.sex && this.name;
  }

  finalizeRaceSelection(){
    this.onComplete.emit(new Character(this.selectedRace, this.name, this.sex));
  }

}
