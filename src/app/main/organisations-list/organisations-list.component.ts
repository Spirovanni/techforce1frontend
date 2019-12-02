import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../api.service';

@Component({
  selector: 'app-organisations-list',
  templateUrl: './organisations-list.component.html',
  styleUrls: ['./organisations-list.component.scss']
})
export class OrganisationsListComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  organisations: Object = [];

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

}
