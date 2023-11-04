import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KindergardenDTO } from '../Models/Kindergarden';
import { TeacherDTO } from '../Models/Teacher';
const httpOption={headers:new HttpHeaders({'content-type':'application/json'})}
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url='https://localhost:7085/api/Teacher'
  constructor(private http:HttpClient) { }
  GetTeacherList():Observable<TeacherDTO[]>{
return this.http.get<TeacherDTO[]>(`${this.url}/GetTeachers`)
  }
  Get_KG_for_Teacher(teacherID:number):Observable<KindergardenDTO[]>{
    return this.http.get<KindergardenDTO[]>(`${this.url}/Get_KG_By_Teacher/${teacherID}`)
      }
      Get_All_KG():Observable<KindergardenDTO[]>{
        return this.http.get<KindergardenDTO[]>(`${this.url}/Get_All_KG`)
          }
}
