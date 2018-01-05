import {Background} from '../../background';

export const gnomishCulture: Background = {
    name: 'Gnomish Culture',
    description: 'You grew up in a Gnomish nation, or in an Gnomish enclave. Halfling culture thrives on a thirst for knowledge, and reveres gadgets and tools of all kinds. You have grown up in this sort of environment, and have become influenced by Gnomish culture.', 
    features: [
        {name: 'Artificer\'s Lore', text: 'Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.'},
        {name: 'Tinker', text: 'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. Consult the Players Handbook under the Gnome entry for a list of devices you can create, or consult your Game Master.'}
    ],
    languages: ['Common','Gnomish'],
    skills: [],
    proficiencies: [
        {category: 'tool',name:'tinker\'s tools'}
    ]
}