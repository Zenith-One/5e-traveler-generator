import { Component } from '@angular/core';

import { Character } from './character';

let devStep = 0;

let devData = [
  '{"race":{"name":"Dwarf","description":"You are a short, stout and extremely hardy humanoid. Many dwarves make their homes in the earth and under mountains.","abilityScores":{"strength":0,"dexterity":0,"constitution":2,"intelligence":0,"wisdom":1,"charisma":0},"age":{"term":20,"startingAge":50,"agingStarts":110,"advancedAging":310},"speed":25,"features":[{"name":"Darkvision","text":"You have darkvision (You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t dicern color in darkness, only shades of gray)."},{"name":"Dwarven Resilience","text":"You have advantage on saving throws against poison, and you have resistance to poison damage."},{"name":"Dwarven Toughness","text":"Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."},{"name":"Stout","text":"Your speed is not reduced by wearing heavy armor."}],"sizeFactors":{"category":"medium","description":"Squat and stocky, your size is medium.","baseHeight":44,"heightModifier":{"count":2,"sides":4},"baseWeight":115,"weightModifier":{"count":2,"sides":6},"averageHeight":49},"naming":{"race":"Dwarvish"}},"name":"as","sex":"Male","size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":47,"weight":127},"abilityScores":{"strength":0,"dexterity":0,"constitution":0,"intelligence":0,"wisdom":0,"charisma":0},"skills":[],"events":[]}',
  '{"race":{"name":"Dwarf","description":"You are a short, stout and extremely hardy humanoid. Many dwarves make their homes in the earth and under mountains.","abilityScores":{"strength":0,"dexterity":0,"constitution":2,"intelligence":0,"wisdom":1,"charisma":0},"age":{"term":20,"startingAge":50,"agingStarts":110,"advancedAging":310},"speed":25,"features":[{"name":"Darkvision","text":"You have darkvision (You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t dicern color in darkness, only shades of gray)."},{"name":"Dwarven Resilience","text":"You have advantage on saving throws against poison, and you have resistance to poison damage."},{"name":"Dwarven Toughness","text":"Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."},{"name":"Stout","text":"Your speed is not reduced by wearing heavy armor."}],"sizeFactors":{"category":"medium","description":"Squat and stocky, your size is medium.","baseHeight":44,"heightModifier":{"count":2,"sides":4},"baseWeight":115,"weightModifier":{"count":2,"sides":6},"averageHeight":49},"naming":{"race":"Dwarvish"}},"name":"as","sex":"Male","size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":47,"weight":127},"abilityScores":{"strength":15,"dexterity":14,"constitution":15,"intelligence":12,"wisdom":11,"charisma":8},"skills":[],"events":[]}',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  character: Character;
  step: number = 1;

  constructor(){
    if(devStep){
      Character.parse(devData[devStep-2]);
      this.character = JSON.parse(devData[devStep - 2]);
      this.step = devStep;
    }
  }

  handleRaceSelection(character: Character){
    this.character = character;
    this.step++;
    if(devStep) this.logCharacter();
  }

  handleNameSelection(){
    this.step++
    if(devStep) this.logCharacter();
  }

  handleAbilitySelection(){
    this.step++;
    if(devStep) this.logCharacter();
  }

  logCharacter(){
    console.log(this.character);
  }
}
