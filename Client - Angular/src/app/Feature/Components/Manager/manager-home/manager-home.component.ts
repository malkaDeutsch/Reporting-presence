import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {
  select:string='';
  constructor(private router:Router) { }
  goToEdit(){
    this.router.navigate(['/Edit']);
  }
  goToWatching(){
    this.router.navigate(['/Watching']);

  }
  ngOnInit(): void {
  }

}
