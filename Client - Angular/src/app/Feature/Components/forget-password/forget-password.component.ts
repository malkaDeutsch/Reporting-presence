import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
forget:FormGroup | undefined;
message:string='';
  constructor(private router:Router) { }
  btnGoToLoin:boolean=false;
  sendPassword(){
    this.message="!הסיסמה נשלחה אליך למייל"
    this.btnGoToLoin=true;

  }
  goToLogin(){
    this.router.navigate(['/BeforeLogin']);

  }
  ngOnInit(): void {
    this.forget=new FormGroup
    ({'mail':new FormControl('',Validators.required)})
  }

}
