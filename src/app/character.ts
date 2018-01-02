import {AbilityScores, AbilityScoreName, Race, Size} from './race';
import {RaceService} from './race.service';
import {Skill, Skills} from './skill.enum';

export class Character {
    size: Size;
    abilityScores: AbilityScores;
    skills: Skill[];
    events: any[];

    constructor(public race: Race, public name: string, public sex: 'Male' | 'Female'){
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

    static getAbilityModifier(score:number){
        return Math.floor(score/2 -5);
    }

    getAbilityModifier(scoreName: AbilityScoreName){
        var theScore = this.abilityScores[scoreName];
        return Math.floor(theScore/2 -5);
    }
}
