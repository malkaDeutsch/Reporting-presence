import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-before-login',
  templateUrl: './before-login.component.html',
  styleUrls: ['./before-login.component.css']
})
export class BeforeLoginComponent implements OnInit {

  constructor(private router:Router) { }
  goToLoginTeem(){
this.router.navigate(['/Login']);
  }
  goToLoginManager(){
    this.router.navigate(['/LoginManager']);

  }
  ngOnInit(): void {
  }

}
