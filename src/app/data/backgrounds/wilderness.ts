import {Background} from '../../background';
import {Skills} from '../../skill.enum';

export const wilderness: Background = {
    name: 'Wilderness',
    description: 'You grew up beyond civilization, and not only survived but thrived. You lived off the land for years with minimal contact with the outside world. Technology and crowded streets make you feel uncomfortable because it is just so.... Unnatural.', 
    features: [
        {name: 'Hunter', text: 'You have proficiency with the spear, shortbow, javelin and dagger.'},
        {name: 'Instincts', text: 'You have proficiency in the Survival skill.'},
        {name: 'Gatherer', text: 'You have advantage on any navigation-related skill checks for areas you are familiar with. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers suitable food and water supplies.'}
    ],
    languages: ['Common (or if you prefer, the primary language of the closest settlement)'],
    skills: [Skills.survival]
}
