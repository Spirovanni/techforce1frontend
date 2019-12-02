import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ApiService} from '../api.service';

import { MainComponent } from './main.component';
import { OrganisationsListComponent } from './organisations-list/organisations-list.component';
import { OrganisationsDetailComponent } from './organisations-detail/organisations-detail.component';
import { OrganisationsFormComponent } from './organisations-form/organisations-form.component';

const routes: Routes = [
  {path: 'organisations', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    OrganisationsListComponent,
    OrganisationsDetailComponent,
    OrganisationsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
