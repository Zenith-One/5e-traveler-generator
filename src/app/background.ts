import {Skill} from './skill.enum';
import { Proficiency } from './proficiency';

export interface Background {
    name: string;
    description: string;
    features: {name: string, text: string}[];
    languages: string[];
    skills: Skill[];
    proficiencies: Proficiency[];
}