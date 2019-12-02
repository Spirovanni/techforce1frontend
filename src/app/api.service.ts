import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/organisations/';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 7816dd538f9049cb1278811a4f69b920d690ef15'
  });

  constructor(
    private httpClient: HttpClient,
  ) {}
  getOrganisations() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers});
  }
}
