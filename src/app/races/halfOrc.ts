import { Race, darkvision } from '../race';

export const halfOrc: Race = {
      name: 'Half-orc',
      description: 'You are a half-breed, caught between the worlds of orcs and men.',
      abilityScores: {
        strength: 2,
        dexterity: 0,
        constitution: 1,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
      },
      age: {
        term: 4,
        startingAge: 14,
        agingStarts: 30,
        advancedAging: 60
      },
      speed: 30,
      features: [
        {name: 'Darkvision', text: darkvision},
        {name: 'Reletless Endurance', text: "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest."},
        {name: 'Savage Attacks', text: "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Half-orcs are somewhat larger and bulkier than humans, but your size is still medium.',
        baseHeight: (4*12) + 10,
        heightModifier: {count: 2, sides: 10},
        baseWeight: 140,
        weightModifier: {count: 2, sides: 6}
      },
      naming: {
        race: 'Orcish'
      }
    }