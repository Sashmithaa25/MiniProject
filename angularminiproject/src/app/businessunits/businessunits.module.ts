import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BusinessunitsRoutingModule } from './businessunits-routing.module';
import { BusinessunitsComponent } from './businessunits.component';


@NgModule({
  declarations: [BusinessunitsComponent],
  imports: [
    CommonModule,
    BusinessunitsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgForm,
    FormsModule
   ],
   providers: [
     NgForm
   ]
})
export class BusinessunitsModule { }
