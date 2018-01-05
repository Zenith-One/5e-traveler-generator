import { Career, CareerSpecialization } from '../../career';

const infantry: CareerSpecialization = {
    name: 'Infantry',
    description: 'You were a member of the rank-and-file of a campaigning army. You marched, slept, and fought beside many who didn\'t make it.',
    survival: {dc: 5, ability: 'constitution'},
    advancement: {dc: 12, ability: 'intelligence'},
    training: [

        {category: 'Skill', description: "Athletics"},
        {category: 'Tool', description:  "Medical kit"},
        {category: 'Skill', description: "Intimidation"},
        {category: 'Tool', description: "Vehicles (land)"},
        {category: 'Skill', description: "Survival"},
        {category: 'Language', description: "One standard language you picked up while campaigning in a foreign land"}
    ]
};

const guard: CareerSpecialization = {
    name: 'Guard',
    description: 'You were a guard, serving in a settlement, on a merchant caravan, or in some other capacity.',
    survival: {dc: 7, ability: 'strength'},
    advancement: {dc: 11, ability: 'wisdom'},
    training: [
        {category: 'Skill', description: "Athletics"},
        {category: 'Tool', description: "Smith's tools"},
        {category: 'Skill', description: "Perception"},
        {category: 'Tool', description: "Leatherworker's Tools"},
        {category: 'Skill', description: "Intimidation"},
        {category: 'Tool', description: "Carpenter's Tools"}
    ]
};

const mercenary: CareerSpecialization = {
    name: 'Mercenary',
    description: 'You were a soldier of fortune, selling your sword arm to the highest bidder.',
    survival: {dc: 9, ability: 'intelligence'},
    advancement: {dc: 12, ability: 'charisma'},
    training: [
        {category: 'Skill', description: "Persuasion"},
        {category: 'Tool', description: "An additional gaming set of your choice"},
        {category: 'Skill', description: "Athletics"},
        {category: 'Tool', description: "Vehicles (land)"},
        {category: 'Skill', description: "Intimidation"},
        {category: 'Language', description: "One standard language"}
    ]
}

export const soldier: Career = {
    name: 'Soldier',
    description: 'You were a cog in the military machine, be it foreign or domestic.',
    qualify: {dc: 5, ability: 'strength'},
    basicTraining: [
        'You gain proficiency with shields.',
        'You gain tool proficiency with a gaming set of your choice.'
    ],
    specializations: [
        infantry,
        guard,
        mercenary
    ],
    benefits: [
        {gp: 3, other: "A letter from a fallen comrade, entrusted to you for delivery to their family"},
        {gp: 3, other: "A trophy taken from an enemy you defeated"},
        {gp: 5, other: "A gaming set of your choice"},
        {gp: 5, other: "A well-used military uniform"},
        {gp: 7, other: "A slightly out-of-date book on 'modern military strategy'"},
        {gp: 7, other: "The insignia of the highest rank you achieved"},
        {gp: 10, other: "A letter of recommendation from a commanding officer"},
        {gp: 10, other: "A trinket, which will be significant either to another player or through the GM's discretion."}
    ],
    ranks: [
        {name: 'Private Recruit', benefit: ''},
        {name: 'Private', benefit: 'Gain a Contact or Rival of your rank or higher.'},
        {name: 'Veteran', benefit: ''},
        {name: 'Lance Corporal', benefit: 'Gain a Contact or Rival of your rank or higher (or improve the rank of an existing Contact).'},
        {name: 'Corporal', benefit: ''},
        {name: 'Sergeant', benefit: 'Gain a Contact who is a high-ranking officer in your military organization. Gain a bonus Benefit roll.'},
    ]
};