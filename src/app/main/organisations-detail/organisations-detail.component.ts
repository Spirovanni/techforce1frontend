import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Organisation } from '../../models/Organisation';

@Component({
  selector: 'app-organisations-detail',
  templateUrl: './organisations-detail.component.html',
  styleUrls: ['./organisations-detail.component.scss']
})
export class OrganisationsDetailComponent implements OnInit {

  @Input() organisation: Organisation;
  @Output() updateOrganisation = new EventEmitter();
  rateHovered = 0;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }
  rateHover(rate: number) {
    this.rateHovered = rate;
  }
  rateClicked(rate: number) {
    this.apiService.rateOrganisation(rate, this.organisation.id).subscribe(
      result => this.getDetails(),
      error => console.log(error)
    );
  }
  getDetails() {
    this.apiService.getOrganisation(this.organisation.id).subscribe(
      (organisation: Organisation) => {
        this.updateOrganisation.emit(organisation);
      },
      error => console.log(error)
    );
  }

}
