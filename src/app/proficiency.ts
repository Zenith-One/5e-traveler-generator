export type ProficiencyCategory = 'weapon' | 'armor' | 'tool';

export interface Proficiency {
    category: ProficiencyCategory;
    name: string;
}