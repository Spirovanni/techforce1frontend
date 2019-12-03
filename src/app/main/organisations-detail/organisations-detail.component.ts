import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
// import  { } from '../../models/Organisation';

@Component({
  selector: 'app-organisations-detail',
  templateUrl: './organisations-detail.component.html',
  styleUrls: ['./organisations-detail.component.scss']
})
export class OrganisationsDetailComponent implements OnInit {

  @Input() organisation;
  @Output() selectOrganisation = new EventEmitter();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  // getDetails() {
  //   this.apiService.getOrganisation(this.organisation.id).subscribe(
  //     (organisation: Organisation) => {
  //       this.updateOrganisation.emit(organisation);
  //     },
  //     error => console.log(error)
  //   );
  // }

}
