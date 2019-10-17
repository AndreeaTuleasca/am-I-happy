import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmotionsTodayComponent } from './components/emotions-today/emotions-today.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmotionDetailsComponent } from './components/emotion-details/emotion-details.component';
import { EmotionAddComponent } from './components/emotion-add/emotion-add.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { SettingsComponent } from './components/settings/settings.component';
import { EmotionsStatisticsComponent } from './components/emotions-statistics/emotions-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    EmotionsTodayComponent,
    PageNotFoundComponent,
    EmotionDetailsComponent,
    EmotionAddComponent,
    AuthenticateComponent,
    CreateAccountComponent,
    SettingsComponent,
    EmotionsStatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
