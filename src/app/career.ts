import {AbilityScoreName, AbilityScores} from './race';
import {standard} from './core';
import { Proficiency } from './proficiency';

export interface DC {
    dc: number; 
    ability: AbilityScoreName
}

export interface CareerTraining {
    category: 'Skill' | 'Tool' | 'Language' | 'Other';
    description: string;
}

export interface CareerSpecialization extends standard{
    survival: DC;
    advancement: DC;
    training: CareerTraining[];
}

export interface CareerBenefit {
    gp: number;
    other: string;
}

export interface CareerRank {
    name: string;
    benefit: string;
}

export class Career implements standard{
    name: string;
    description: string;
    qualify: DC;
    basicTraining: string[];
    basicTrainingProficiencies: Proficiency[];
    specializations: CareerSpecialization[];
    benefits: CareerBenefit[];
    ranks: CareerRank[];
}

export class CareerRecord {
    careerName: string;
    career: Career;
    joinedAge: number;
    terms: number;
    rank: number;
    training: CareerTraining[];
    benefits: CareerBenefit[];
}