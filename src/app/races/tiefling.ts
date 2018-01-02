import { Race, darkvision } from '../race';

export const tiefling:Race = {
      name: 'Tiefling',
      description: 'You are the end result of generations of fiend blood mixing with humans.',
      abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 2
      },
      age: {
        term: 4,
        startingAge: 18,
        agingStarts: 34,
        advancedAging: 82
      },
      speed: 30,
      features: [
        {name: 'Darkvision', text: darkvision},
        {name: 'Hellish Resistance', text: "You have resistance to fire damage."},
        {name: 'Infernal Legacy', text: "You know the Thaumaturgy cantrip. When you reach 3rd level, you can cast the Hellish Rebuke spell as a 2nd level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the Darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells."}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Tieflings are about the same size and build as humans. Your size is medium.',
        baseHeight: (4*12) + 9,
        heightModifier: {count: 2, sides: 8},
        baseWeight: 110,
        weightModifier: {count: 2, sides: 4}
      },
      naming: {
        race: 'Fiendish',
        sexAgnostic: true
      }
    }