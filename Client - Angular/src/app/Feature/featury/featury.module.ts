import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../Components/home/home.component';
import {ButtonModule} from 'primeng/button';
import { LoginComponent } from '../Components/login/login.component';
import {PasswordModule} from 'primeng/password';
import { ReportingComponent } from '../Components/reporting/reporting.component';
import {ImageModule} from 'primeng/image';
import { SheardModule } from 'src/app/sheard/Sheard/sheard/sheard.module';
import {TooltipModule} from 'primeng/tooltip';
import {BadgeModule} from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import {ListboxModule} from 'primeng/listbox';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import { MessageComponent } from '../Components/message/message.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {SidebarModule} from 'primeng/sidebar';
import { ChooseKGComponent } from '../Components/choose-kg/choose-kg.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/editor';
import {TabViewModule} from 'primeng/tabview';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BeforeLoginComponent } from '../Components/before-login/before-login.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent,LoginComponent,ReportingComponent,MessageComponent,ChooseKGComponent,BeforeLoginComponent],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    ImageModule,
    SheardModule,
    TooltipModule,
    BadgeModule,
    ChipModule,
    ListboxModule,
    AccordionModule,
    FieldsetModule,
    DynamicDialogModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    TabViewModule,
    VirtualScrollerModule,
    DropdownModule,
    CardModule,
    AngularEditorModule,
    MatDialogModule
    
  ]
})
export class FeaturyModule { }
