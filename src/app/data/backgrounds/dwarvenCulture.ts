import {Background} from '../../background';

export const dwarvenCulture: Background = {
    name: 'Dwarven Culture',
    description: 'You grew up in a Dwarven nation, or in a Dwarven enclave. Dwarven culture generally revolves around the earth, so there is a focus on activities such as mining, smelting and earthworks. You have grown up in this sort of environment, and have become influenced by Dwarven culture.',
    features: [
        {name: 'Dwarven Combat Training', text: 'You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.'},
        {name: 'Tool Proficiency', text: 'You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.'},
        {name: 'Stonecunning', text: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'}
    ],
    languages: ['Common','Dwarvish'],
    skills: []
}