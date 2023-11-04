import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import {ButtonModule} from 'primeng/button';
import{InputTextModule} from 'primeng/inputtext'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FeaturyModule } from './Feature/featury/featury.module';
import { InputTextareaModule } from "primeng/inputtextarea";
import { FormsModule } from "@angular/forms";
import { SheardModule } from './sheard/Sheard/sheard/sheard.module';
import { ForgetPasswordComponent } from './Feature/Components/forget-password/forget-password.component';
import { AttendanceService } from './Core/attendance.service';
import { TeacherToKindergardenService } from './Core/teacher-to-kindergarden.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerModule } from './Feature/Components/Manager/manager/manager.module';
import { DocumentEditorModule } from '@txtextcontrol/tx-ng-document-editor';


@NgModule({
  declarations: [
    AppComponent,
    ForgetPasswordComponent,
    
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    FeaturyModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    SheardModule,
    HttpClientModule,
    ReactiveFormsModule,
    ManagerModule,
    DocumentEditorModule,
    
    
  
  ],
  providers: [AttendanceService,TeacherToKindergardenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
