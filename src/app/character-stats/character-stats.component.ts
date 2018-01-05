import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Character } from '../character';

type category = 'core' | 'race' | 'background';

@Component({
  selector: 'character-stats',
  templateUrl: './character-stats.component.html',
  styleUrls: ['./character-stats.component.css']
})
export class CharacterStatsComponent {
  @Input() character: Character;
  category: category = 'core';

  constructor() { }

  selectCategory(selected: category){
    this.category = selected;
  }


}
