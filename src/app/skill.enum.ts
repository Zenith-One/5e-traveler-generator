import { AbilityScoreName } from './race';

export interface Skill{
    id: number;
    name: string;
    abilityScore: AbilityScoreName
}

export const Skills:{[key:string]:Skill} = {
    athletics:  {id: 0, name: 'Athletics', abilityScore: 'strength'},

    acrobatics: {id: 1, name: 'Acrobatics', abilityScore: 'dexterity'},
    sleightOfHand: {id: 2, name: 'Sleight of Hand', abilityScore: 'dexterity'},
    stealth: {id: 3, name: 'stealth', abilityScore: 'dexterity'},

    arcana: {id: 4, name: 'Arcana', abilityScore: 'intelligence'},
    history: {id: 5, name: 'History', abilityScore: 'intelligence'},
    investigation: {id: 6, name: 'Investigation', abilityScore: 'intelligence'},
    nature : {id: 7, name: 'Nature', abilityScore: 'intelligence'},
    religion : {id: 8, name: 'Religion', abilityScore: 'intelligence'},

    animalHandling : {id: 9, name: 'Animal Handling', abilityScore: 'wisdom'},
    insight : {id: 10, name: 'Insight', abilityScore: 'wisdom'},
    medicine : {id: 11, name: 'Medicine', abilityScore: 'wisdom'},
    perception : {id: 12, name: 'Perception', abilityScore: 'wisdom'},
    survival : {id: 13, name: 'Survival', abilityScore: 'wisdom'},

    deception : {id: 14, name: 'Deception', abilityScore: 'charisma'},
    intimidation : {id: 15, name: 'Intimidation', abilityScore: 'charisma'},
    performance : {id: 16, name: 'Performance', abilityScore: 'charisma'},
    persuasion : {id: 17, name: 'Persuasion', abilityScore: 'charisma'}
}