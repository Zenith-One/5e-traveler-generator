import { Race, darkvision } from '../../race';

export const halfElf: Race = {
      name: 'Half-elf',
      description: 'You are a half-breed, caught between the worlds of elves and men.',
      abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 2
      },
      age: {
        term: 10,
        startingAge: 20,
        agingStarts: 60,
        advancedAging: 160
      },
      speed: 30,
      features: [
        {name: 'Half-Elf Versatility', text: 'Increase two ability scores, other than Charisma, by 1 each.'},
        {name: 'Darkvision', text: darkvision},
        {name: 'Fey Ancestry', text: "You have advantage on saving throws against being charmed, and magic can't put you to sleep."}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Half-elves are about the same size as humans. Your size is medium.',
        baseHeight: (4*12) + 9,
        heightModifier: {count: 2, sides: 8},
        baseWeight: 110,
        weightModifier: {count: 2, sides: 4}
      },
      naming: {
        race: 'Human'
      }
    }