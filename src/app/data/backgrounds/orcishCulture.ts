import {Background} from '../../background';
import {Skills} from '../../skill.enum';

export const orcishCulture: Background = {
    name: 'Orcish Culture',
    description: 'You grew up in a Orcish nation, or in an Orcish enclave. Orcish culture is generally unrefined, reverting to barbarism and savagery. You have grown up in this sort of environment (and somehow survived), and have become influenced by Orcish culture.', 
    features: [
        {name: 'Orcish Combat Training', text: 'You have proficiency with the greataxe, hand-axe, javelin and spear.'},
        {name: 'Menacing', text: 'You have proficiency in the Intimidation skill.'}
    ],
    languages: ['Common','Orcish'],
    skills: [Skills.intimidation]
}