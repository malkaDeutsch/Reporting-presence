import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KindergardenDTO } from '../Models/Kindergarden';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class KindergardenService {
  url='https://localhost:7085/api/Kindergarden'
  constructor(private http:HttpClient) { }
  Get_KG_List(corporationId:number):Observable<KindergardenDTO[]>{
return this.http.get< KindergardenDTO[]>(`${this.url}/GetAll_KG`)
  }
 
}
