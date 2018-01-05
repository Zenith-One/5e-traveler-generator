import { Component, Input } from '@angular/core';
import { Race, Size } from '../race';
import { RaceService } from '../race.service';

@Component({
  selector: 'race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent {
  @Input() race: Race;

  constructor() { }

  getAverageSize(){
    return RaceService.getAverageSize(this.race);
  }

  getHeightDisplay(s: Size){
    return RaceService.getHeightDisplay(s);
  }

  getSelectedRaceAbilityScoreMods(){
    let mods = RaceService.getAbilityModifiers(this.race);
    return mods.map((item)=>{
      let name = item.name.substr(0,1).toUpperCase() + item.name.substr(1);
      let value = item.value > 0 ? '+' + item.value : item.value;
      return name + ' ' + value;
    }).join(', ');
  }


}
