import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataSharingChildComponent} from './datasharing/datasharingchildcomponent';
import { DataSharingMasterComponent} from './datasharing/datasharingmastercomponent';


import { AstronautComponent } from './astronaut.component';
import { MissionControlComponent } from './missioncontrol.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './votetaker.component';
import { HeroBirthday2Component } from './pipes/pipes.component';

import { SharedService} from './datasharing/sharedservice';
import { PowerBoostCalculatorComponent } from './pipes/powerbooster.component';
import { ExponentialStrengthPipe } from './pipes/exponential-power.pipes';

@NgModule({
  declarations: [
    AppComponent,
    DataSharingChildComponent,
    DataSharingMasterComponent,
     AstronautComponent,
    MissionControlComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    HeroBirthday2Component,
    PowerBoostCalculatorComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
