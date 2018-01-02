import {Background} from '../../background';

export const halflingCulture: Background = {
    name: 'Halfling Culture',
    description: 'You grew up in a Halfing nation, or in an Halfling enclave. Halfling culture revolves around food and community, and have a deep sense of loyalty and sense of duty to others. You have grown up in this sort of environment, and have become influenced by Halfling culture.', 
    features: [
        {name: 'Brave', text: 'You have advantage on saving throws against being frightened.'},
        {name: 'Food Connoisseur', text: 'Whenever you make an Intelligence (History) check related to the origin of a particular dish, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.'}
    ],
    languages: ['Common','Halfling'],
    skills: []
}