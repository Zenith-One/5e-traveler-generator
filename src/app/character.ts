import {AbilityScores, AbilityScoreName, Race, Size} from './race';
import {RaceService} from './race.service';
import {Skill, Skills} from './skill.enum';
import { Background } from './background';

export class Character {
    name: string;
    sex: 'Male' | 'Female';
    size: Size;
    abilityScores: AbilityScores;
    skills: Skill[];
    events: any[];
    background: Background;

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
        return c;
    }
}
