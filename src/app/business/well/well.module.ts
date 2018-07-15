import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WellRoutingModule } from './well-routing.module';
import { WellComponent } from './well.component';

@NgModule({
  imports: [
    CommonModule,
    WellRoutingModule
  ],
  declarations: [WellComponent]
})
export class WellModule { }
