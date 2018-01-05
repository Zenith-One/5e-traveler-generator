import { Career, CareerSpecialization } from '../../career';

const laborer: CareerSpecialization = {
    name: 'Laborer',
    description: 'You performed the simplest, yet necessary tasks that make the civilization work.',
    survival: {dc: 3, ability: 'constitution'},
    advancement: {dc: 13, ability: 'wisdom'},
    training: [
        {category: 'Skill', description: 'Acrobatics'},
        {category: 'Tool', description: 'Vehicle of your choice (you can only make this choice once)'},
        {category: 'Tool', description: 'A gaming set of your choice (other than the one you gained during basic training, and you can only make this choice once)'},
        {category: 'Skill', description: 'Animal Handling'},
        {category: 'Skill', description: 'Athletics'},
        {category: 'Tool', description: 'A musical instrument of your choice (you can only make this choice once)'}
    ]
};

const handyman: CareerSpecialization = {
    name: 'Handyman',
    description: 'You were called upon to fix things when they broke down.',
    survival: {dc: 10, ability: 'intelligence'},
    advancement: {dc: 6, ability: 'wisdom'},
    training: [
        {category: 'Skill', description: 'Investigation'},
        {category: 'Tool', description: 'Tinker\'s tools'},
        {category: 'Skill', description: 'Sleight of Hand'},
        {category: 'Tool', description: 'Cobbler\'s tools'},
        {category: 'Skill', description: 'Persuasion'},
        {category: 'Tool', description: 'Woodcarver\'s tools'}
    ]
};

const retainer: CareerSpecialization = {
    name: 'Retainer',
    description: 'You worked in the service of a nobleman or dignitary.',
    survival: {dc: 8, ability: 'charisma'},
    advancement: {dc: 8, ability: 'intelligence'},
    training: [
        {category: 'Skill', description: 'Persuasion'},
        {category: 'Tool', description: 'Cook\'s utensils'},
        {category: 'Skill', description: 'Insight'},
        {category: 'Tool', description: 'Calligrapher\'s tools'},
        {category: 'Skill', description: 'Deception'},
        {category: 'Language', description: 'One standard language'}
    ]
}

export const serf: Career = {
    name: 'Serf',
    description: 'Serfs are the labourers who form the backbone of any civilised society. They can work freely for themselves or in service to a liege lord (or institution).',
    qualify: {dc: 5, ability: 'wisdom'},
    basicTraining: [
        'You gain tool proficiency with a gaming set of your choice.',
        'You gain weapon proficiency with the sickle and club.'
    ],
    specializations: [
        laborer,
        handyman,
        retainer
    ],
    benefits: [
        {gp: 3, other: 'A love-letter from a local proclaiming their love for you'},
        {gp: 3, other: 'A vial of earth taken from your home'},
        {gp: 5, other: 'A gaming set'},
        {gp: 5, other: 'A musical instrument of your choice, styled in the local fashion'},
        {gp: 7, other: 'A pulp booklet depicting the adventures of a fabled hero'},
        {gp: 7, other: 'A religious token'},
        {gp: 10, other: 'A letter of recommendation from a local dignitary'},
        {gp: 10, other: 'A flimsy piece of parchment with rough sketchings of people closest to you'}
    ],
    ranks: [
        {name: 'Hireling', benefit: ''},
        {name: 'Assistant Supervisor', benefit: 'Gain a Contact or Rival of your rank or higher.'},
        {name: 'Supervisor', benefit: ''},
        {name: 'Senior Staff', benefit: 'Gain a Contact or Rival of your rank or higher (or improve the rank of an existing Contact).'},
        {name: 'Assistant Chief of Staff', benefit: ''},
        {name: 'Chief of Staff', benefit: 'Gain a Contact who is a senior staff member of your employer. Gain a bonus Benefit roll.'},
    ]
};