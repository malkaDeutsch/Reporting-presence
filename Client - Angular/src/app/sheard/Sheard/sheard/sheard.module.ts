import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import {TooltipModule} from 'primeng/tooltip';
import {BadgeModule} from 'primeng/badge';
import { ChipModule } from 'primeng/chip';
import {ListboxModule} from 'primeng/listbox';
import { ContactComponent } from '../../Components/contact/contact.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [HeaderComponent,FooterComponent,ContactComponent],
  imports: [
    CommonModule,
    TooltipModule,
    BadgeModule,
    ChipModule,
    ListboxModule,
    ButtonModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SheardModule { }
