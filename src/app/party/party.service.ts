import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private httpClient: HttpClient) { }

  getNewCode() {
    return this.httpClient.get('/party/new');
  }
}
