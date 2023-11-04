import { Component, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { Observable } from 'rxjs';
import { AttendanceService } from 'src/app/Core/attendance.service';
import { AttendancDTO } from 'src/app/Models/Attendance';
import { ChildDTO } from 'src/app/Models/Child';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  constructor(private attendanceService:AttendanceService) { }

  public IsAttandance=false
 childList:ChildDTO[]=[];
 attandance:Map<number,boolean>=new Map<number,boolean>()
 kinderGardenID:number=4

  showResponse( ) {
}
  
ngOnInit(): void {
  this.attendanceService.GetChildAttananceList(this.kinderGardenID).subscribe((result:ChildDTO[]) => {
  this.childList=result;
  this.childList.forEach(c=>this.attandance.set(c.childId,false))
})
  
  
 }



Update(id:number){
  
 this.attandance.set(id,!this.attandance.get(id))
}
countTrue:number=0;

formX:string='';
updateAttandance(){



}
}




