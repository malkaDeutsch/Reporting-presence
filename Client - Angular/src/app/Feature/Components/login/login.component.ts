import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherService } from 'src/app/Core/teacher.service';
import { TeacherDTO } from 'src/app/Models/Teacher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  teacherList:TeacherDTO[] = [];
  constructor(private router:Router, private teacherService:TeacherService) { 
  }
  ngOnInit(): void {  
    this.teacherService.GetTeacherList().subscribe(
      res => {
        this.teacherList=res})
      ;
  }
  goToReporting(){
    this.router.navigate(['/Reporting']);
  }
  i:number=0;
  checkAndGoToChooseKG(){  
for( this.i=0;this.i<this.teacherList.length;this.i++)
if(this.teacherList[this.i].firstName==this.userName&&
  this.teacherList[this.i].password==this.password){
    this.router.navigate(['/choose-kg'], { queryParams: { "teacherID": this.teacherList[this.i].teacherId } });

    break;}
  }
  forgetPas(){
    this.router.navigate(['/ForgetPassword']);
  }
  userName:string='';
  password:string='';
  messagePas:string='סיסמה';
  messageUse:string='שם משתמש';

toManeger(){
  
  this.router.navigate(['/ManagerHome']);
}

}