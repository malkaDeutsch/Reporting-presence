import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-kg',
  templateUrl: './add-kg.component.html',
  styleUrls: ['./add-kg.component.css']
})
export class AddKGComponent implements OnInit {

  constructor(private router:Router) {  this.stateOptions = [{label: 'חינוך מיוחד', value: 2}, {label: 'חינוך רגיל', value: 1}]}
  stateOptions: any[]=[];
  value1: number=0;
  email:string='';
  phone:string='';
  address:string='';
  password:string='';
  value:any;
  ngOnInit(): void {
  }

}
