import { Race, darkvision } from '../race';

export const elf: Race = {
      name: 'Elf',
      description: 'You are a lithe, graceful and extraordinarily beautiful humanoid. Many elves make their homes in wild forested areas.',
      abilityScores: {
        strength: 0,
        dexterity: 2,
        constitution: 0,
        intelligence: 1,
        wisdom: 0,
        charisma: 0
      },
      age: {
        term: 45,
        startingAge: 100,
        agingStarts: 280,
        advancedAging: 685
      },
      speed: 30,
      features: [
        {name: 'Darkvision', text: darkvision},
        {name: 'Fey Ancestry', text: 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.'},
        {name: 'Cantrip', text: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'},
        {name: 'Trance', text: 'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.'}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Tall and slender, your size is medium.',
        baseHeight: (4*12) + 6,
        heightModifier: {count: 2, sides: 4},
        baseWeight: 90,
        weightModifier: {count: 2, sides: 6}
      },
      naming: {
        race: 'Elvish'
      }
    }