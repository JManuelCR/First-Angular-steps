import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from 'src/server/server.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

import { AppComponent } from './app.component';
import { MyOwnComponentComponent } from './my-own-component/my-own-component.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { DataBindigPracticeComponent } from './data-bindig-practice/data-bindig-practice.component';
import { SecondChallengeComponent } from './second-challenge/second-challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MyOwnComponentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServersComponent,
    DataBindigPracticeComponent,
    SecondChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
