import { Component, OnInit, TemplateRef} from '@angular/core';
import Swal from 'node_modules/sweetalert2/src/sweetalert2.js';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { ClientLists } from './client-lists'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})


export class ClientsComponent implements OnInit {

 
  isEdit=false;

  clientObj = {
    idtype: '',
    idnum:'',
    name:'',
    upload:'',
    industry:'',
    subindustry:'',
    market:'',
    marketunit:'',
    description:'',
    id:''
  }
 

  closeResult:string;
  allClients:Object;

 

  public clientList: ClientLists[]= [];
  name:any;

  page = 1;

  handlePageChange(event) {
    this.page = event;
  }
 
  constructor(
    public clientService:ClientsService, 
    private modalService: NgbModal, 
    private ngForm: NgForm)
    {
          
    }
    
   log(x){
    console.log(x)
  }

  
 addClients(formObj)
 {
     
      console.log(formObj);
      this.clientService.createClients(formObj).subscribe((response) => {
        this.modalService.dismissAll();
        //sweetalert message popup
        Swal.fire({
          title: 'Success!!',
          text:   "Client has been added successfully",
          icon: 'success'
        });

        this.getLatestClient();
        console.log("Client Has been Added")
       });
 }

 Search()
 {
   if(this.name == "")
   {
      this.ngOnInit();
   }
   else{
     this.clientList=this.clientList.filter(res =>{
       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
     });
   }
 }
 deleteClient(client)
 {
  if(confirm("Are you sure to delete "+client.name)) {
  this.clientService.deleteClient(client).subscribe(response => {
    this.getLatestClient();
  });
}
 }

 editClient(client){
  this.clientObj=client;
   this.isEdit=true;
  
  
 }
 
 updateClient()
 {
   
   this.clientService.upateClients(this.clientObj).subscribe(response => {
    this.modalService.dismissAll();
    //sweetalert message popup
    Swal.fire({
      title: 'Success!!',
      text:   "Client has been updated successfully",
      icon: 'success'
    });
    this.getLatestClient();
  });
  this.isEdit=!(this.isEdit);
 }
  getLatestClient()
  {
    this.clientService.getClients().subscribe(response => {
      this.clientList=response as ClientLists[]
    });
   

  }
 
 

  open(content) {
    console.log("Welcome");
    this.modalService.open(content,{ size: 'lg', backdrop: 'static' });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {

    this.clientService.getClients().subscribe((response) => {
      this.clientList=response as ClientLists[];
});
  
  }

  }