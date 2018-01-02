import {Skill} from './skill.enum';

export interface Background {
    name: string;
    description: string;
    features: {name: string, text: string}[];
    languages: string[];
    skills: Skill[];
}