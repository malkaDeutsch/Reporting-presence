import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CorporationDTO } from '../Models/Corporation';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class CorporationService {
  url='https://localhost:7085/api/Corporation'
  constructor(private http:HttpClient) { }
  Get_cities_List(corporationId:number):Observable<CorporationDTO[]>{
return this.http.get< CorporationDTO[]>(`${this.url}/Get_All_Cities_By_Corporation/${corporationId}`)
  }}

