import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityDTO } from '../Models/City';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  url='https://localhost:7085/api/City'
  constructor(private http:HttpClient) { }
Get_cities_by_corporation_list(corporationID:number):Observable<CityDTO[]>{
return this.http.get<CityDTO[]>(`${this.url}/GetCityByCorpration/${corporationID}`)
  }
}
