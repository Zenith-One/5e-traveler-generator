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
  races = RaceService.races;
  selectedRace: Race = this.races[0];
  raceLocked: boolean = false;

  constructor(private raceService: RaceService, private nameService: NameService){}

  selectRace(r:Race){
    this.selectedRace = r;
  }

  lockInRace(){
    this.finalizeRaceSelection();
  }

  finalizeRaceSelection(){
    this.onComplete.emit(new Character(this.selectedRace));
  }

}
