import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SponsorsRoutingModule } from './sponsors-routing.module';
import { SponsorsComponent } from './sponsors.component';
import { OverallComponent } from './overall/overall.component';


@NgModule({
  declarations: [SponsorsComponent, OverallComponent],
  imports: [
    CommonModule,
    SponsorsRoutingModule,
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
export class SponsorsModule { }
