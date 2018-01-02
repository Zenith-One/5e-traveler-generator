import { Race } from '../race';

export const dragonborn: Race = {
      name: 'Dragonborn',
      description: 'You are a humanoid with pronounced draconic heritage.',
      abilityScores: {
        strength: 2,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 1
      },
      age: {
        term: 4,
        startingAge: 15,
        agingStarts: 31,
        advancedAging: 75
      },
      speed: 30,
      features: [
        {name: 'Draconic Ancestry', text: "You have draconic ancestry. Choose one type from the Draconic Ancestry table in the Player's Handbook. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table."},
        {name: 'Breath Weapon', text: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t se it again until you complete a short or long rest."},
        {name: 'Damage Resistance', text: "You have resistance to the damage type associated with your draconic ancestry."}
      ],
      sizeFactors: {
        category: 'medium',
        description: 'Dragonborn are taller and heavier than humans, often standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.',
        baseHeight: (5*12) + 6,
        heightModifier: {count: 2, sides: 8},
        baseWeight: 175,
        weightModifier: {count: 2, sides: 6}
      },
      naming: {
        race: 'Draconic'
      }
    }