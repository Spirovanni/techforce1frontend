import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Organisation } from './models/Organisation';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/organisations/';
  baseOrganisationUrl = `${this.baseUrl}api/organisations/`;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 7816dd538f9049cb1278811a4f69b920d690ef15'
  });

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}
  getOrganisations() {
    return this.httpClient.get(this.baseUrl, {headers: this.getAuthHeaders()});
  }
  getOrganisation(id: number) {
    return this.httpClient.get<Organisation>(`${this.baseOrganisationUrl}${id}/`, {headers: this.getAuthHeaders()});
  }
  rateOrganisation(rate: number, organisationId: number) {
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseOrganisationUrl}${organisationId}/rate_organisation/`, body, {headers: this.getAuthHeaders()});
  }
  getAuthHeaders() {
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    });
  }

}
