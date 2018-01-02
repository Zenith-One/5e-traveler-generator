import { Injectable } from '@angular/core';
import { RollExpression, DiceService } from './dice.service';
import { Race, Size, darkvision } from './race';

import * as races from './races/index';

@Injectable()
export class RaceService {
  static races: Race[] = [
    races.dwarf,
    races.elf,
    races.halfling,
    races.human,
    races.dragonborn,
    races.gnome,
    races.halfElf,
    races.halfOrc,
    races.tiefling

  ];

  constructor() { }

  static getSize(race: Race): Size{
    let baseHeight = race.sizeFactors.baseHeight;
    let heightMod = DiceService.roll(race.sizeFactors.heightModifier).total;
    let baseWeight = race.sizeFactors.baseWeight;
    let weightMod = DiceService.roll(race.sizeFactors.weightModifier).total;
    return {
      category: race.sizeFactors.category,
      description: race.sizeFactors.description,
      height: baseHeight + heightMod,
      weight: baseWeight + (heightMod * weightMod)
    };
  }

  static getAverageSize(race: Race): Size{
    let size = race.sizeFactors;
    let baseHeight = size.baseHeight;
    let heightDieAverage = DiceService.dieAverage(size.heightModifier.sides) * size.heightModifier.count;
    let baseWeight = race.sizeFactors.baseWeight;
    let weightDieAverage = DiceService.dieAverage(size.weightModifier.sides) * size.weightModifier.count;
    return {
      category: race.sizeFactors.category,
      description: race.sizeFactors.description,
      height: baseHeight + Math.floor(heightDieAverage),
      weight: baseWeight + Math.floor(heightDieAverage * weightDieAverage)
    }
  }

  static getHeightDisplay(height: number | Size): string{
    if(typeof height === 'object'){
      height = (<Size>height).height;
    }
    let ft = Math.floor(height/12);
    let inches = height % 12;
    return ft + "'" + inches + '"';
  }

  static getAbilityModifiers(race: Race): {name: string, value: number}[]{
    let abilities = race.abilityScores;
    let names = ['strength','dexterity','constitution','intelligence','wisdom','charisma'];
    let bonuses = [];
    for(let i = 0; i < names.length; i += 1){
      let current = abilities[names[i]];
      if(current !== 0){
        bonuses.push({name: names[i], value: current});
      }
    }
    let sorted = bonuses.sort((a,b) => {
      if(a.value < b.value){return -1; } 
      else if(a.value == b.value){ return 0;}
      return 1;
    });
    return bonuses[0] === sorted[0] && names.length === sorted.length ? sorted : sorted.reverse();
  }

}
