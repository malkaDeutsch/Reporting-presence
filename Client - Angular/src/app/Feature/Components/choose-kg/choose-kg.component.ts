import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { TeacherToKindergardenService } from 'src/app/Core/teacher-to-kindergarden.service';
import { TeacherToKindergardenDTO } from 'src/app/Models/TeacherToKindergarden';
import { ActivatedRoute } from '@angular/router';  
import { TeacherService } from 'src/app/Core/teacher.service';
import { KindergardenDTO } from 'src/app/Models/Kindergarden';




@Component({
  selector: 'app-choose-kg',
  templateUrl: './choose-kg.component.html',
  styleUrls: ['./choose-kg.component.css']
})
export class ChooseKGComponent implements OnInit {
  teacherID:number=-1;

  kinderGardenList:TeacherToKindergardenDTO[]=[];
  constructor( private teacherToKindergardenService:TeacherToKindergardenService,private router:Router,private _Activatedroute:ActivatedRoute,private teacherService:TeacherService )  { }
  KG_List:KindergardenDTO[]=[];

  ngOnInit(): void {
    this._Activatedroute.queryParams
    .subscribe(params => {
      console.log(params); // { order: "popular" }
      this.teacherID = params['teacherID'];
      alert(this.teacherID); // popular
    }
  );
  this.teacherService.Get_All_KG().subscribe(
    res => {
      this.KG_List=res});
    this.teacherToKindergardenService.GetTeacherKG_List(this.teacherID).subscribe((result:TeacherToKindergardenDTO[]) => {
    this.kinderGardenList=result;
      })
  }
  selected_KG=''
  GoToReporting(){
    this.router.navigate(['/Reporting']);

  }

} 


