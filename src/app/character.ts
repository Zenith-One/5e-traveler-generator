import {AbilityScores, AbilityScoreName, Race, Size} from './race';
import {RaceService} from './race.service';
import {Skill, Skills} from './skill.enum';
import { Background } from './background';
import { backgrounds } from './data/backgrounds/index';
import { Connection } from './connection';
import { CareerBenefit } from './career';
import { Proficiency } from './proficiency';
import * as core from './core';

interface ProficiencyRecord extends Proficiency {
    source: 'background' | 'race' | 'career',
    sourceName?: string;
}

interface WorkHistory {
    name: string;
    specialty: string;
    skillProficiencies: string[];
    toolProficiencies: string[];
    rank: number;
    totalBenefitsEarned: number;
    benefitsEarned: CareerBenefit[];
    retired: boolean;
}

export class Character {
    step: number;
    name: string;
    sex: 'Male' | 'Female';
    size: Size;
    age: number;
    abilityScores: AbilityScores;
    skills: Skill[];
    proficiencies: ProficiencyRecord[] = [];
    languages: string[] = [];
    events: any[];
    background: Background;
    workHistory: WorkHistory[];
    connections: Connection[] = [];

    constructor(public race: Race){
        this.size = RaceService.getSize(this.race);
        this.abilityScores = {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0,
        };
        this.skills = [];
        this.events = [];
        this.age = race.age.startingAge;
    }

    setSex(sex: 'Male' | 'Female'){
        this.sex = sex;
    }

    setName(name: string){
        this.name = name;
    }

    static getAbilityModifier(score:number){
        return Math.floor(score/2 -5);
    }

    getAbilityModifier(scoreName: AbilityScoreName){
        var theScore = this.abilityScores[scoreName];
        return Math.floor(theScore/2 -5);
    }

    setBackground(background: Background){
        this.background = background;
        let records: ProficiencyRecord[] = background.proficiencies.map((item: Proficiency) => {
            let r: ProficiencyRecord = {category: item.category, name: item.name, source: 'background'};
            return r;
        })
        this.proficiencies = core.unique(this.proficiencies.concat(records));
    }

    getRacialTraits(){
        return this.race.features;
    }

    getBackgroundTraits(){
        return this.background? this.background.features : [];
    }

    getTraitsAndFeatures() {
        return this.getRacialTraits().concat(this.getBackgroundTraits());
    }

    static parse(str: string){
        let cdata = JSON.parse(str);
        let c = new Character(cdata.race);
        c.setName(cdata.name);
        c.setSex(cdata.sex);
        c.abilityScores = cdata.abilityScores;
        c.background = cdata.background;
        c.size = cdata.size;
        c.skills = cdata.skills;
        c.age = cdata.age;
        c.connections = cdata.connections;
        c.workHistory = cdata.workHistory;
        console.log(c);
        return c;
    }

    getHeightDisplay(){
        return RaceService.getHeightDisplay(this.size);
    }

    serialize(){
        let raw = JSON.parse(JSON.stringify(this));
        raw.race = this.race.name;
        if(this.background && this.background.name){
            raw.background = this.background.name;
        }
        return JSON.stringify(raw);
    }

    static deserialize(str: string){
        let raw = JSON.parse(str);
        let race = RaceService.races.filter((item:Race) => item.name === raw.race)[0];
        let background = backgrounds.filter((item:Background)=>item.name === raw.background)[0];
        let c = new Character(race);
        c.step = raw.step;
        c.setName(raw.name);
        c.setSex(raw.sex);
        c.setBackground(background);
        c.abilityScores = raw.abilityScores;
        c.size = raw.size;
        c.skills = raw.skills;
        c.age = raw.age;
        c.connections = raw.connections;
        c.workHistory = raw.workHistory;
        console.log(c);
        return c;
    }
}
