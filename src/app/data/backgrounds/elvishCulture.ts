import {Background} from '../../background';
import {Skills} from '../../skill.enum';

export const elvishCulture: Background = {
    name: 'Elvish Culture',
    description: 'You grew up in a Elvish nation, or in a Elvish enclave. Elvish culture generally revolves around the forest and their fey magical ancestry, so there is much focus on scavenging in forests and learning magical lore. You have grown up in this sort of environment, and have become influenced by Elvish Culture.', 
    features: [
        {name: 'Elf Weapon Training', text: 'You have proficiency with the longsword, shortsword, shortbow, and longbow.'},
        {name: 'Keen Senses', text: 'You have proficiency in the Perception skill.'}
    ],
    languages: ['Common','Elvish','one extra language of your choice'],
    skills: [Skills.perception],
    proficiencies: [
        {category: 'weapon', name: 'longsword'},
        {category: 'weapon', name: 'shortsword'},
        {category: 'weapon', name: 'longbow'},
        {category: 'weapon', name: 'shortbow'}
    ]
}