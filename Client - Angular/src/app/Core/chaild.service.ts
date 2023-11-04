import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildDTO } from '../Models/Child';
import { KindergardenDTO } from '../Models/Kindergarden';
import { ParentDTO } from '../Models/Parent';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class ChaildService {
  url='https://localhost:7085/api/Child'
  constructor(private http:HttpClient) { }
  GetChildList():Observable<ChildDTO[]>{
return this.http.get< ChildDTO[]>(`${this.url}/GetAllChildren`)
  }
  GetParentByChaild(parentID:number):Observable<ParentDTO[]>{
    return this.http.get< ParentDTO[]>(`${this.url}/GetParentByChaild/${parentID}`)
      }
 GetKG_ByChaild(kindergardenID:number):Observable<KindergardenDTO>{
        return this.http.get< KindergardenDTO>(`${this.url}/GetKGByChaild/${kindergardenID}`)
          }
}