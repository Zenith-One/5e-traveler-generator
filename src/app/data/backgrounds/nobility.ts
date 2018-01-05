import {Background} from '../../background';
import {Skills} from '../../skill.enum';

export const nobility: Background = {
    name: 'Nobility',
    description: 'You grew up pampered and prepared for success in life. You had a decent education and servants to tend to your every whim. You understand the importance of wealth, power and prestige. And you have watched with fascinated interest the inner workings of political machinations.', 
    features: [
        {name: 'Duelling & Jousting', text: 'You have proficiency with the longsword, rapier, lance and shortbow.'},
        {name: 'Cultural Education', text: 'You have proficiency in the History skill, as well as the Persuasion skill.'},
        {name: 'Birthright', text: 'Your noble birth means that, when travelling in lands that recognise your nation, commoners will treat you with respect and deference (at least until your reputation or gold runs out), and other nobles will regard you as in the same social sphere. You may need to provide proof of your status; this can be in the form of documents on your person or passing the scrunity of a retainer trained in the extensive lineage of nobility of your nation.'}

    ],
    languages: ['Common','one extra language of your choice'],
    skills: [Skills.history, Skills.persuasion],
    proficiencies: [
        {category: 'weapon', name: 'longsword'},
        {category: 'weapon', name: 'rapier'},
        {category: 'weapon', name: 'lance'},
        {category: 'weapon', name: 'shortbow'}
    ]
}