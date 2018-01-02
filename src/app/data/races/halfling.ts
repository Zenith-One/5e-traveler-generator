import { Race } from '../../race';

export const halfling: Race = {
      name: 'Halfling',
      description: 'You are a small, practical and extraordinarily plucky humanoid.',
      abilityScores: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 1
      },
      age: {
        term: 15,
        startingAge: 20,
        agingStarts: 80,
        advancedAging: 230
      },
      speed: 25,
      features: [
        {name: 'Lucky', text: "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."},
        {name: 'Halfling Nimbleness', text: "You can move through the space of any creature that is of a size larger than yours."},
        {name: 'Naturally Stealthy', text: "You can attempt to hide even when you are obscurred only by a creature that is at least one size larger than you."}
      ],
      sizeFactors: {
        category: 'small',
        description: 'Humble in stature, your size is small.',
        baseHeight: (2*12) + 7,
        heightModifier: {count: 2, sides: 4},
        baseWeight: 35,
        weightModifier: {count: 1, sides: 1}
      },
      naming: {
        race: 'Halfling'
      }
    }