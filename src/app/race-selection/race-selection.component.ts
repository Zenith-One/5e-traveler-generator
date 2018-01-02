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
  selected: string;
  selectedRace: Race;
  races = RaceService.races;
  raceLocked: boolean = false;

  constructor(private raceService: RaceService, private nameService: NameService){}

  selectRace(r:Race){
    this.selectedRace = r;
  }

  lockInRace(){
    this.finalizeRaceSelection();
  }

  getAverageSize(){
    return RaceService.getAverageSize(this.selectedRace);
  }

  getHeightDisplay(s: Size){
    return RaceService.getHeightDisplay(s);
  }

  getSelectedRaceAbilityScoreMods(){
    let mods = RaceService.getAbilityModifiers(this.selectedRace);
    return mods.map((item)=>{
      let name = item.name.substr(0,1).toUpperCase() + item.name.substr(1);
      let value = item.value > 0 ? '+' + item.value : item.value;
      return name + ' ' + value;
    }).join(', ');
  }

  finalizeRaceSelection(){
    this.onComplete.emit(new Character(this.selectedRace));
  }

}
