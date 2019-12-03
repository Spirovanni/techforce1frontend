import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-organisations-list',
  templateUrl: './organisations-list.component.html',
  styleUrls: ['./organisations-list.component.scss']
})
export class OrganisationListComponent implements OnInit {

  @Input() organisations = [];
  @Output() selectOrganisation = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  organisationClicked(organisation) {
    // console.log(organisation);
    this.selectOrganisation.emit(organisation);
  }

}
