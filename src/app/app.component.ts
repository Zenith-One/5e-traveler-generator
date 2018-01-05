import { Component } from '@angular/core';

import { Character } from './character';

let devStep = 0;

let devData = [
  '{"step":2,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":0,"dexterity":0,"constitution":0,"intelligence":0,"wisdom":0,"charisma":0},"skills":[],"events":[],"age":50}',
  '{"step":3,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":0,"dexterity":0,"constitution":0,"intelligence":0,"wisdom":0,"charisma":0},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male"}',
  '{"step":4,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":15,"dexterity":14,"constitution":15,"intelligence":12,"wisdom":11,"charisma":8},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male"}',
  '{"step":5,"race":"Dwarf","connections":[],"size":{"category":"medium","description":"Squat and stocky, your size is medium.","height":51,"weight":150},"abilityScores":{"strength":15,"dexterity":14,"constitution":15,"intelligence":12,"wisdom":11,"charisma":8},"skills":[],"events":[],"age":50,"name":"Gimli","sex":"Male","background":"Dwarven Culture"}'
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
  importString: string;
  importError: string;
  isExporting = false;
  isImporting = false;

  constructor(){
    if(devStep){
      let c = Character.deserialize(devData[Math.max(devStep-2, 0)]);
      this.character = c;
      console.log(c);
      this.step = devStep;
    }
  }

  handleRaceSelection(character: Character){
    this.character = character;
    this.step++;
    character.step = this.step;
    if(devStep) this.logCharacter();
  }

  handleNameSelection(){
    this.step++
    this.character.step = this.step;
    if(devStep) this.logCharacter();
  }

  handleAbilitySelection(){
    this.step++;
    this.character.step = this.step;
    if(devStep) this.logCharacter();
  }

  handleBackgroundSelection(){
    this.step++;
    this.character.step = this.step;
    if(devStep) this.logCharacter();
  }

  getExportedCharacter(){
    return this.character.serialize();
  }

  showExport(){
    this.isExporting = true;
  }

  hideExport(){
    this.isExporting = false;
  }

  showImport(){
    this.isImporting = true;
  }

  hideImport(){
    this.isImporting = false;
  }

  doImport(){
    let c: Character;
    try{
      c = Character.deserialize(this.importString);
    } catch (e){
      this.importError = 'Invalid import string.';
      return;
    }
    if(c){
      this.character = c;
      this.step = c.step;
      this.isImporting = false;
    }
  }

  clearImportError(){
    this.importError = undefined;
  }


  logCharacter(){
    console.log(this.character);
  }
}
