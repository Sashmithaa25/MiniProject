import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: [
   NgForm,
   FormsModule
  ],
  providers: [
    NgForm
  ],
  
})
export class ClientsModule { }
