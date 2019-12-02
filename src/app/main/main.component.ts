import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  // tslint:disable-next-line:ban-types
  organisations: any = [];
  ngOnInit() {
    this.apiService.getOrganisations().subscribe(
      data => {
        this.organisations = data;
      },
      error => console.log(error)
    );
  }

}
