import { Race, darkvision } from '../../race';

export const gnome: Race = {
    name: 'Gnome',
    description: 'You are a small, vibrant, and extraordinarily playful humanoid.',
    abilityScores: {
    strength: 0,
    dexterity: 0,
    constitution: 1,
    intelligence: 2,
    wisdom: 0,
    charisma: 0
    },
    age: {
    term: 26,
    startingAge: 40,
    agingStarts: 144,
    advancedAging: 390
    },
    speed: 25,
    features: [
    {name: 'Darkvision', text: darkvision},
    {name: 'Gnome Cunning', text: "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."}
    ],
    sizeFactors: {
    category: 'small',
    description: 'Quite short, but resilient, your size is small.',
    baseHeight: (2*12) + 11,
    heightModifier: {count: 2, sides: 4},
    baseWeight: 35,
    weightModifier: {count: 1, sides: 1}
    },
    naming: {
    race: 'Sioux'
    }
}