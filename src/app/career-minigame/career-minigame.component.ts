import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'career-minigame',
  templateUrl: './career-minigame.component.html',
  styleUrls: ['./career-minigame.component.css']
})
export class CareerMinigameComponent {
  @Input() character: Character;
  @Output() onComplete: EventEmitter<boolean> = new EventEmitter();
  phase: number = 0;
  tab: 'stats' | 'develop' = 'stats';

  constructor() { }


}
