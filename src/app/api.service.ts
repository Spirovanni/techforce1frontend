import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private organisations = ['IBM', 'Cisco', 'Google', 'Microsoft', 'Oracle', 'SalesForce'];

  constructor() {}
  getOrganisations() {
    return this.organisations;
  }
}
