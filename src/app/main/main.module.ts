import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ApiService} from '../api.service';

import { MainComponent } from './main.component';
import { OrganisationListComponent } from './organisations-list/organisations-list.component';
import { OrganisationsDetailComponent } from './organisations-detail/organisations-detail.component';
import { OrganisationsFormComponent } from './organisations-form/organisations-form.component';

const routes: Routes = [
  {path: 'organisations', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    OrganisationListComponent,
    OrganisationsDetailComponent,
    OrganisationsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFontAwesomeModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
