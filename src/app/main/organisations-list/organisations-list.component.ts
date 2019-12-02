import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../api.service';

@Component({
  selector: 'app-organisations-list',
  templateUrl: './organisations-list.component.html',
  styleUrls: ['./organisations-list.component.scss']
})
export class OrganisationsListComponent implements OnInit {

  organisations = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.organisations = this.apiService.getOrganisations();
  }

}
