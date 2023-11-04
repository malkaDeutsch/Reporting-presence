import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { EditComponent } from '../edit/edit.component';
import { ManagerHomeComponent } from '../manager-home/manager-home.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { SheardModule } from 'src/app/sheard/Sheard/sheard/sheard.module';
import { AddChaildComponent } from '../add-chaild/add-chaild.component';
import { InputTextareaModule } from "primeng/inputtextarea";
import{InputTextModule} from 'primeng/inputtext'
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { AddParentsComponent } from '../add-parents/add-parents.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { AddKGComponent } from '../add-kg/add-kg.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { AddTeacherToKGComponent } from '../add-teacher-to-kg/add-teacher-to-kg.component';
import { WatchingComponent } from '../watching/watching.component';
import { HeaderManagerComponent } from '../header-manager/header-manager.component';
import { WatchChaildComponent } from '../watch-chaild/watch-chaild.component';
import {MatTableModule} from '@angular/material/table';
import { WatchParentByChaildComponent } from '../watch-parent-by-chaild/watch-parent-by-chaild.component';
import {MatSelectModule} from '@angular/material/select';
import { WatchKGComponent } from '../watch-kg/watch-kg.component';
import { MessageManagerComponent } from '../message-manager/message-manager.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {EditorModule} from 'primeng/editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { LoginManagerComponent } from '../login-manager/login-manager.component';


@NgModule({
  declarations: [EditComponent,ManagerHomeComponent,AddChaildComponent
    ,AddTeacherComponent,AddParentsComponent,AddKGComponent,AddTeacherToKGComponent,WatchingComponent
    ,HeaderManagerComponent,WatchChaildComponent,WatchParentByChaildComponent, WatchKGComponent,MessageManagerComponent,
    LoginManagerComponent,


  ],
  imports: [
    CommonModule,
    ButtonModule,
    CascadeSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SheardModule,
    InputTextareaModule,
    InputTextModule,
    FileUploadModule,
    HttpClientModule,
    TriStateCheckboxModule,
    SelectButtonModule,
    MatTableModule,
    MatSelectModule,
    CardModule,
    DropdownModule,
    VirtualScrollerModule,
    TooltipModule,
    EditorModule,
    AngularEditorModule

    
    
    
    
  ]
})
export class ManagerModule { }
