import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmotionAddComponent } from './components/emotion-add/emotion-add.component';
import { EmotionDetailsComponent } from './components/emotion-details/emotion-details.component';
import { EmotionsTodayComponent} from './components/emotions-today/emotions-today.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmotionsStatisticsComponent } from './components/emotions-statistics/emotions-statistics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';


const routes: Routes = [
  {
    path: 'emotion-add',
    component: EmotionAddComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'emotion-details/:id',
    component: EmotionDetailsComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: 'emotions-today',
    component: EmotionsTodayComponent,
  },
  { path: '',
    redirectTo: '/emotions-today',
    pathMatch: 'full'
  },
  {
    path: 'emotions-statistics',
    component: EmotionsStatisticsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: 'create-account',
    component: CreateAccountComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
