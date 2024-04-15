import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marvel } from '../shared/models/iMarvel';

@Injectable({
  providedIn: 'root'
})
export class SearchCharacterService {
  dados: any;

  environment = {
    urlApi: "https://gateway.marvel.com:443/v1/public/characters?",
    tsKey: "1712864126",
    privateApiKey: "34c6a6f890ffcd225c464929e68de4aa",
    publicApiKey: "22c17363342a6fb2dadaa870aa129dca",
  }
  constructor(private http: HttpClient) { }
  searchCharacter(value: string) {
    return this.http.get<Marvel>(`${this.environment.urlApi}nameStartsWith=${value}&ts=${this.environment.tsKey}&apikey=${this.environment.publicApiKey}&hash=${this.environment.privateApiKey}`);

  }
}
