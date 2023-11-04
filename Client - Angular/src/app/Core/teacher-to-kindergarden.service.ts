import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeacherToKindergardenDTO } from '../Models/TeacherToKindergarden';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class TeacherToKindergardenService {
  url='https://localhost:7085/api/TeacherToKindergarden'
  constructor(private http:HttpClient) { }
  GetTeacherKG_List(teacherID:number):Observable<TeacherToKindergardenDTO[]>{
return this.http.get<TeacherToKindergardenDTO[]>(`${this.url}/getKGtoTeacher/${teacherID}`)
  }

}
