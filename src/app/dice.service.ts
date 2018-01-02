import { Injectable } from '@angular/core';

export interface RollResult{
  total: number;
  rolls: number[]
}

export interface RollExpression {
  count: number,
  sides: number
}

@Injectable()
export class DiceService {

  constructor() { }

  static roll(rollExpression: RollExpression): RollResult;
  static roll(count: number, sides: number):RollResult;
  static roll(arg1: any, sides?: number):RollResult{
    var count = arg1;
    if(arg1 && typeof arg1 === "object"){
      count = arg1.count;
      sides = arg1.sides;
    }
    let total = 0;
    let rolls = [];
    for(var i = count; i > 0; i--){
      var current = rollOne(sides);
      rolls.push(current);
      total += current;
    }
    return {total: total, rolls: rolls};
  }

  static dieAverage(sides){
    let total = 0;
    for(let i = sides; i > 0; i--){
      total += i;
    }
    return total/sides;
  }

}

function rollOne(sides: number): number{
  let result = 0;
  let runs = 0;
  while (result === 0 && runs < 5000){
    let temp = Math.floor(Math.random() * 100);
    if(temp < sides){
      result = temp + 1;
    }
  }
  return result;
}