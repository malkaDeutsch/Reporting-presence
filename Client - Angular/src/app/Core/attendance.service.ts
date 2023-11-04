import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observable} from 'rxjs'
import { ChildDTO } from '../Models/Child';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}
@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
url='https://localhost:7085/api/Child'
  constructor(private http:HttpClient) { }
  GetChildAttananceList(kinderGardenID:number):Observable<ChildDTO[]>{
return this.http.get< ChildDTO[]>(`${this.url}/GetAttandanceChildren/${kinderGardenID}`)
  }
}
