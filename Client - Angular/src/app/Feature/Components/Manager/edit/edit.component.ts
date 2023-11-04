import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router) { }
  addChaild(){
    this.router.navigate(['/AddChaild']);
  }
  addTeacher(){
    this.router.navigate(['/AddTeacher']);
  }
  addKG(){
    this.router.navigate(['/AddKG']);
  }
  addTeacherToKG(){
    this.router.navigate(['/AddTeacherToKG']);

  }
  ngOnInit(): void {
  }

}
