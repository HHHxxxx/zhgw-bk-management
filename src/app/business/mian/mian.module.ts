import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MianRoutingModule } from './mian-routing.module';
import { MianComponent } from './mian.component';

@NgModule({
  imports: [
    CommonModule,
    MianRoutingModule
  ],
  declarations: [MianComponent]
})
export class MianModule { }
