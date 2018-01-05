import { Career, CareerSpecialization } from '../../career';

const courier: CareerSpecialization = {
    name: 'Courier',
    description: 'You have travelled far and wide carrying messages.',
    survival: {dc: 5, ability: 'constitution'},
    advancement: {dc: 16, ability: 'intelligence'},
    training: [
        {category: 'Skill', description: 'Persuasion'},
        {category: 'Language', description: 'One standard language'},
        {category: 'Tool', description: 'Cartographer\'s tools'},
        {category: 'Skill', description: 'Animal Handling'},
        {category: 'Skill', description: 'Athletics'},
        {category: 'Tool', description: 'Vehicles (land)'}
    ]
};

const surveyor: CareerSpecialization = {
    name: 'Surveyor',
    description: 'You visited remote locations and assessed their worth.',
    survival: {dc: 7, ability: 'wisdom'},
    advancement: {dc: 14, ability: 'intelligence'},
    training: [
        {category: 'Skill', description: 'Nature'},
        {category: 'Tool', description: "If allowed, Prospector's kit. Otherwise, your choice of Jeweller's tools, Mason's tools, or Woodcarver's tools (can only choose once from this list)"},
        {category: 'Skill', description: 'Animal Handling'},
        {category: 'Tool', description: 'Cartographer\'s tools'},
        {category: 'Skill', description: 'Perception'},
        {category: 'Tool', description: 'Investigation'}
    ]
};

const explorer: CareerSpecialization = {
    name: 'Explorer',
    description: 'You went wherever the map was blank, charting the uncharted.',
    survival: {dc: 9, ability: 'constitution'},
    advancement: {dc: 11, ability: 'wisdom'},
    training: [
        {category: 'Skill', description: 'Nature'},
        {category: 'Tool', description: 'Navigator\'s tools'},
        {category: 'Skill', description: 'Survival'},
        {category: 'Tool', description: 'Cartographer\'s tools'},
        {category: 'Skill', description: 'Perception'},
        {category: 'Skill', description: 'Animal Handling'}
    ]
}

export const scout: Career = {
    name: 'Scout',
    description: 'Scouts are members of the exploratory and communication services for Lords, Academies, Temples or other important person or group.',
    qualify: {dc: 5, ability: 'intelligence'},
    basicTraining: [
        'You gain tool proficiency with Calligrapher\'s tools.',
        'You gain weapon proficiency with the dagger and shortsword.'
    ],
    specializations: [
        courier,
        surveyor,
        explorer
    ],
    benefits: [
        {gp: 5, other: 'An unfinished map of a foreign location'},
        {gp: 5, other: 'A small diary with exotic flowers pressed between its pages'},
        {gp: 7, other: 'A gaming set'},
        {gp: 7, other: 'A musical instrument of your choice, styled in the fashion of a foreign nation'},
        {gp: 10, other: 'A basic phrasebook for an exotic foreign language'},
        {gp: 10, other: 'An exquisitely detailed book on beasts'},
        {gp: 15, other: 'A letter of recommendation from a foreign dignitary'},
        {gp: 15, other: 'A riding horse and saddle'}
    ],
    ranks: [
        {name: 'Apprentice Scout', benefit: ''},
        {name: 'Scout', benefit: 'Gain a Contact or Rival of your rank or higher.'},
        {name: 'Journeyman Scout', benefit: ''},
        {name: 'Master Scout', benefit: 'Gain a Contact or Rival of your rank or higher (or improve the rank of an existing Contact).'},
        {name: 'Scout Captain', benefit: ''},
        {name: 'Chief Scout', benefit: 'Gain a Contact who is a senior member of your society. Gain a bonus Benefit roll.'},
    ]
};