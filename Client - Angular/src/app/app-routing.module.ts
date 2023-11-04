import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginComponent } from './Feature/Components/before-login/before-login.component';
import { ChooseKGComponent } from './Feature/Components/choose-kg/choose-kg.component';
import { ForgetPasswordComponent } from './Feature/Components/forget-password/forget-password.component';
import { HomeComponent } from './Feature/Components/home/home.component';
import { LoginComponent } from './Feature/Components/login/login.component';
import { AddChaildComponent } from './Feature/Components/Manager/add-chaild/add-chaild.component';
import { AddKGComponent } from './Feature/Components/Manager/add-kg/add-kg.component';
import { AddParentsComponent } from './Feature/Components/Manager/add-parents/add-parents.component';
import { AddTeacherToKGComponent } from './Feature/Components/Manager/add-teacher-to-kg/add-teacher-to-kg.component';
import { AddTeacherComponent } from './Feature/Components/Manager/add-teacher/add-teacher.component';
import { EditComponent } from './Feature/Components/Manager/edit/edit.component';
import { LoginManagerComponent } from './Feature/Components/Manager/login-manager/login-manager.component';
import { ManagerHomeComponent } from './Feature/Components/Manager/manager-home/manager-home.component';
import { MessageManagerComponent } from './Feature/Components/Manager/message-manager/message-manager.component';
import { WatchChaildComponent } from './Feature/Components/Manager/watch-chaild/watch-chaild.component';
import { WatchKGComponent } from './Feature/Components/Manager/watch-kg/watch-kg.component';
import { WatchParentByChaildComponent } from './Feature/Components/Manager/watch-parent-by-chaild/watch-parent-by-chaild.component';
import { WatchingComponent } from './Feature/Components/Manager/watching/watching.component';
import { MessageComponent } from './Feature/Components/message/message.component';
import { ReportingComponent } from './Feature/Components/reporting/reporting.component';
import { ContactComponent } from './sheard/Components/contact/contact.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"Login",component:LoginComponent},
  {path:"Reporting",component:ReportingComponent},
  {path:"choose-kg",component:ChooseKGComponent},
  {path:"Message",component:MessageComponent},
  {path:"ForgetPassword",component:ForgetPasswordComponent},
  {path:"Contact",component:ContactComponent},
  {path:"ManagerHome",component:ManagerHomeComponent},
  {path:"Edit",component:EditComponent},
  {path:"AddChaild",component:AddChaildComponent},
  {path:"AddTeacher",component:AddTeacherComponent},
  {path:"AddParents",component:AddParentsComponent},
  {path:"AddKG",component:AddKGComponent},
  {path:"AddTeacherToKG",component:AddTeacherToKGComponent},
  {path:"Watching",component:WatchingComponent},
  {path:"WatchChaild",component:WatchChaildComponent},
  {path:"WatchParentByChaild",component:WatchParentByChaildComponent},
  {path:"WatchKG",component:WatchKGComponent},
  {path:"MessageManager",component:MessageManagerComponent},
  {path:"BeforeLogin",component:BeforeLoginComponent},
  {path:"LoginManager",component:LoginManagerComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
