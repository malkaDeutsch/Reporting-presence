import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-parents',
  templateUrl: './add-parents.component.html',
  styleUrls: ['./add-parents.component.css']
})
export class AddParentsComponent implements OnInit {

  constructor(private router:Router) {  this.stateOptions = [{label: 'באחריות אם', value: 'father'}, {label: 'באחריות אב', value: 'mather'}]}
  stateOptions: any[]=[];
  value1: string='';
  emailFather:string='';
  emailMother:string='';
  phoneHome:string='';
  phonefather:string='';
  phoneMother:string='';
  lastName:string='';
  fatherName:string='';
  motherName:string='';
  password:string='';
  value: any;
  ngOnInit(): void {
  }
  returnToChaild(){
    this.router.navigate(['/AddChaild']);

  }
}
