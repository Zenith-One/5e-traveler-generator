import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RaceService } from './race.service';
import { NameService } from './name.service';
import { DiceService } from './dice.service';
import { RaceSelectionComponent } from './race-selection/race-selection.component';
import { AbilityScoreSelectionComponent } from './ability-score-selection/ability-score-selection.component';
import { BackgroundSelectionComponent } from './background-selection/background-selection.component';
import { NameSelectionComponent } from './name-selection/name-selection.component';
import { CareerMinigameComponent } from './career-minigame/career-minigame.component';
import { CharacterStatsComponent } from './character-stats/character-stats.component';
import { CoreDetailsComponent } from './character-stats/core-details/core-details.component';
import { BackgroundDetailsComponent } from './background-details/background-details.component';
import { RaceDetailsComponent } from './race-details/race-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RaceSelectionComponent,
    AbilityScoreSelectionComponent,
    BackgroundSelectionComponent,
    NameSelectionComponent,
    CareerMinigameComponent,
    CharacterStatsComponent,
    CoreDetailsComponent,
    BackgroundDetailsComponent,
    RaceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DiceService, RaceService, NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
