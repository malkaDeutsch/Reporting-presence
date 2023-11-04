import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  constructor(private router:Router) { 
  }
  ngOnInit(): void {  

      ;
  }
  goToReporting(){
    this.router.navigate(['/Reporting']);
  }
  i:number=0;
  checkAndGoToChooseKG(){  
    this.router.navigate(['/ManagerHome']);
  }
  forgetPas(){
    this.router.navigate(['/ForgetPassword']);
  }
  userName:string='';
  password:string='';
  messagePas:string='סיסמת רשת';
  messageUse:string='שם רשת';

toManeger(){
  
  this.router.navigate(['/ManagerHome']);
}

}
