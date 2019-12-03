import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  organisations: any = [];
  selectedOrganisation = null;
  constructor(
    private apiService: ApiService
  ) { }
  ngOnInit() {
    this.apiService.getOrganisations().subscribe(
      data => {
        this.organisations = data;
      },
      error => console.log(error)
    );
  }

  selectOrganisation(organisation) {
    this.selectedOrganisation = organisation;
    console.log('selectedOrganisation', this.selectedOrganisation);
  }

}
