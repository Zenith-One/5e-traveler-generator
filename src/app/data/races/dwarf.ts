import { Race, darkvision } from '../../race';

export const dwarf: Race = {
      name: 'Dwarf',
      description: 'You are a short, stout and extremely hardy humanoid. Many dwarves make their homes in the earth and under mountains.',
      abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 2,
        intelligence: 0,
        wisdom: 1,
        charisma: 0
      },
      age: {
        term: 20,
        startingAge: 50,
        agingStarts: 110,
        advancedAging: 310
      },
      speed: 25,
      features: [
        {name: 'Darkvision', text: darkvision},
        {name: 'Dwarven Resilience', text: 'You have advantage on saving throws against poison, and you have resistance to poison damage.'},
        {name: 'Dwarven Toughness', text: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'},
        {name: 'Stout', text: 'Your speed is not reduced by wearing heavy armor.'}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Squat and stocky, your size is medium.',
        baseHeight: (3*12) + 8,
        heightModifier: {count: 2, sides: 4},
        baseWeight: 115,
        weightModifier: {count: 2, sides: 6},
        averageHeight: 49
      },
      naming: {
        race: 'Dwarvish'
      }
    }