import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor() { }
  firstName:string='';
  lasttName:string='';
  phone:string='';
  userName:string='';
  password:string='';
  
  ngOnInit(): void {
  }

}
