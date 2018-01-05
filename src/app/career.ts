import {AbilityScoreName, AbilityScores} from './race';
import {standard} from './core';

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

export interface Career extends standard{
    qualify: DC;
    basicTraining: string[];
    specializations: CareerSpecialization[];
    benefits: CareerBenefit[];
    ranks: CareerRank[];
}

export interface CareerRecord {
    careerName: string;
    career: Career;
    joinedAge: number;
    terms: number;
    rank: number;
    training: CareerTraining[];
    benefits: CareerBenefit[];
}