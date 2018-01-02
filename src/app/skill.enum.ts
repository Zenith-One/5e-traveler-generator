import { AbilityScoreName } from './race';

export interface Skill{
    name: string;
    abilityScore: AbilityScoreName
}

export const Skills:{[key:string]:Skill} = {
    athletics:  {name: 'Athletics', abilityScore: 'strength'},

    acrobatics: {name: 'Acrobatics', abilityScore: 'dexterity'},
    sleightOfHand: {name: 'Sleight of Hand', abilityScore: 'dexterity'},
    stealth: {name: 'stealth', abilityScore: 'dexterity'},

    arcana: {name: 'Arcana', abilityScore: 'intelligence'},
    history: {name: 'History', abilityScore: 'intelligence'},
    investigation: {name: 'Investigation', abilityScore: 'intelligence'},
    nature : {name: 'Nature', abilityScore: 'intelligence'},
    religion : {name: 'Religion', abilityScore: 'intelligence'},

    animalHandling : {name: 'Animal Handling', abilityScore: 'wisdom'},
    insight : {name: 'Insight', abilityScore: 'wisdom'},
    medicine : {name: 'Medicine', abilityScore: 'wisdom'},
    perception : {name: 'Perception', abilityScore: 'wisdom'},
    survival : {name: 'Survival', abilityScore: 'wisdom'},

    deception : {name: 'Deception', abilityScore: 'charisma'},
    intimidation : {name: 'Intimidation', abilityScore: 'charisma'},
    performance : {name: 'Performance', abilityScore: 'charisma'},
    persuasion : {name: 'Persuasion', abilityScore: 'charisma'}
}