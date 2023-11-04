import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ChildDTO } from 'src/app/Models/Child';

@Component({
  selector: 'app-add-chaild',
  templateUrl: './add-chaild.component.html',
  styleUrls: ['./add-chaild.component.css']
})
export class AddChaildComponent implements OnInit {

  constructor(private router:Router) { }
  firstName:string='';
  lastName:string='';
  age:string='';
  address:string='';
  passwordOfParent:string='';
  ngOnInit(): void {
  }
  nweChaild:ChildDTO={
    firstName: '', lastName: '', address: '', age: -1, areaId: -1, childId: -1, image: '', kindergardenId: -1, parentId: -1,
    parentName: '',
    kindergardenName: ''
  };
  Confirm(){
    this.nweChaild.firstName=this.firstName;
    this.nweChaild.lastName=this.lastName;
    this.nweChaild.address=this.address;
    this.nweChaild.age= parseInt(this.age);

  }

  updateParents(){
    this.router.navigate(['/AddParents']);

  }
  

}
