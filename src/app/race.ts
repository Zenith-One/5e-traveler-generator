import { RollExpression, DiceService } from './dice.service';

export const darkvision = 'You have darkvision (You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t dicern color in darkness, only shades of gray).'

export interface Size {
  category: string;
  description: string;
  height: number; //inches
  weight: number; //lbs
}

export interface SizeFactors {
  category: string;
  description: string;
  baseHeight: number; //inches
  heightModifier: RollExpression;
  baseWeight: number;
  weightModifier: RollExpression;
  averageHeight?: number;
  averageWeight?: number;
}

export interface RaceFeature {
  name: string;
  text: string
}
export interface Aging {
  term: number;
  startingAge: number;
  agingStarts: number;
  advancedAging: number;
};
export type AbilityScoreName= 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
export interface NameGeneratorSettings {
  race: string;
  sexAgnostic?: boolean;
}

export class Race {
  name: string;
  description: string;
  abilityScores: AbilityScores;
  age: Aging;
  speed: number;
  features?: RaceFeature[];
  sizeFactors: SizeFactors;
  size?: Size;
  naming: NameGeneratorSettings;
}