import { Race } from '../race';

export const human: Race = {
      name: 'Human',
      description: 'You are a standard humanoid.',
      abilityScores: {
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1
      },
      age: {
        term: 4,
        startingAge: 18,
        agingStarts: 34,
        advancedAging: 82
      },
      speed: 30,
      features: [],
      sizeFactors: {
        category: 'medium',
        description: 'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.',
        baseHeight: (4*12) + 8,
        heightModifier: {count: 2, sides: 10},
        baseWeight: 110,
        weightModifier: {count: 2, sides: 4}
      },
      naming: {
        race: 'Human'
      }
    }