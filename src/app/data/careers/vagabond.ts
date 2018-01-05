import { Career, CareerSpecialization } from '../../career';

const savage: CareerSpecialization = {
    name: 'Savage',
    description: 'You lived barely above animals.',
    survival: {dc: 9, ability: 'constitution'},
    advancement: {dc: 9, ability: 'strength'},
    training: [

        {category: 'Skill', description: "Survival"},
        {category: 'Skill', description: "Nature"},
        {category: 'Tool', description:  "Herbalism kit"},
        {category: 'Skill', description: "Animal Handling"},
        {category: 'Other', description: "Gain an animal friend as a pet. You cannot control this animal, but it is friendly toward you."},
        {category: 'Tool', description: "Woodcarver's tools"}
    ]
};

const scavenger: CareerSpecialization = {
    name: 'Scavenger',
    description: 'You searched ship-wrecks, abandone locations, and recent battlefields for whatever pieces of scrap you could sell.',
    survival: {dc: 9, ability: 'dexterity'},
    advancement: {dc: 9, ability: 'constitution'},
    training: [
        {category: 'Skill', description: "Investigation"},
        {category: 'Tool', description: "Tinker's tools"},
        {category: 'Skill', description: "Sleight of Hand"},
        {category: 'Skill', description: "Persuasion"},
        {category: 'Other', description: "Gain a trinket. This will be significant, either to another player or through the GM's discretion."},
        {category: 'Tool', description: "Thieves' Tools"}
    ]
};

const wanderer: CareerSpecialization = {
    name: 'Wanderer',
    description: 'You lived hand-to-mouth in the slums and ghettos of the world.',
    survival: {dc: 9, ability: 'constitution'},
    advancement: {dc: 9, ability: 'intelligence'},
    training: [
        {category: 'Skill', description: "Stealth"},
        {category: 'Tool', description: "Cook's utensils"},
        {category: 'Skill', description: "Sleight of Hand"},
        {category: 'Other', description: "Gain a trinket. This will be significant, either to another player or through the GM's discretion."},
        {category: 'Skill', description: "Deception"},
        {category: 'Language', description: "One standard language"}
    ]
}

export const vagabond: Career = {
    name: 'Vagabond',
    description: 'Vagabonds are itenerant wanderers, the travellers and the hitch-hikers. They go whereever they please, without direction or purpose.',
    qualify: {dc: 0, ability: 'intelligence'},
    basicTraining: [
        'You gain weapon proficiency with the dagger and club.'
    ],
    specializations: [
        savage,
        scavenger,
        wanderer
    ],
    benefits: [
        {gp: 1, other: 'A piece of paper printed with propaganda'},
        {gp: 1, other: 'A knapsack filled with meagre belongings'},
        {gp: 3, other: 'An incomplete gaming set'},
        {gp: 3, other: "Tattered and grubby nobleman's clothes, still usable with some work"},
        {gp: 5, other: 'A handbill announcing the latest entertainment fad'},
        {gp: 5, other: 'A religious token'},
        {gp: 7, other: "A nobleman's letter, dropped by a clumsy courier"},
        {gp: 7, other: 'A flimsy piece of parchment with rough details of a contact who will help you get rich quick'}
    ],
    ranks: [
        {name: '', benefit: ''},
        {name: '', benefit: 'Gain a Contact or Rival of your rank or higher.'},
        {name: '', benefit: ''},
        {name: '', benefit: 'Gain a Contact or Rival of your rank or higher (or improve the rank of an existing Contact).'},
        {name: '', benefit: ''},
        {name: '', benefit: 'Gain a Contact who is high up in unsavory circles'},
    ]
};