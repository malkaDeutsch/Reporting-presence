import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-manager',
  templateUrl: './header-manager.component.html',
  styleUrls: ['./header-manager.component.css']
})
export class HeaderManagerComponent implements OnInit {

  select:string='';
  constructor(private router:Router) { }
  goToEdit(){
    this.router.navigate(['/Edit']);
  }
  goToWatching(){
    this.router.navigate(['/Watching']);

  }
  goToHome(){
    this.router.navigate(['/Home']); 
  }
  goToMessage(){
    this.router.navigate(['/MessageManager']); 

  }
  ngOnInit(): void {
  }

}
