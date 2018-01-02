import {Background} from '../../background';
import {Skills} from '../../skill.enum';

export const cityUrchin: Background = {
    name: 'City Urchin',
    description: 'You grew up alone on the streets of the big city, or at least it felt that way. You struggled to survive, fending for yourself and fighting fiercely over food and your meagre possesions. You are shaped for better or for worse by your life growing up in desperate poverty.', 
    features: [
        {name: 'Street Training', text: 'You have proficiency with the dagger, sling, club and unarmed strikes.'},
        {name: 'Slippery Hands', text: 'You have proficiency in the Sleight of Hand skill.'},
        {name: 'Street Smarts', text: 'You gain proficiency in one of the following tools: Disguise kit or Thieves’ tools.'}
    ],
    languages: ['Common (or if you prefer, the main language of the city you grew up in)'],
    skills: [Skills.sleightOfHand]
}