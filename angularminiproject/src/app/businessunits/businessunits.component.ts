import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms'
import Swal from 'node_modules/sweetalert2/src/sweetalert2.js';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import{ BusinessunitsService } from '../businessunits.service';
import { BusinessUnitLists } from './business-unit-lists';


@Component({
  selector: 'app-businessunits',
  templateUrl: './businessunits.component.html',
  styleUrls: ['./businessunits.component.css']
})
export class BusinessunitsComponent implements OnInit {
   
  isEdit=false;

  businessObj = {
    id:'',
     unit:'',
     description:''
  }
 

  closeResult:string;
  allClients:Object;

  

  public bunitList: BusinessUnitLists[]= [];
  name:any;
 
  constructor(
    public bunitService:BusinessunitsService, 
    private modalService: NgbModal, 
    private ngForm: NgForm)
    {
          
    }
    

  ngOnInit(): void {
    this.bunitService.getBusinessUnits().subscribe((response) => {
      this.bunitList=response as BusinessUnitLists[];
});
  }

  open(business) {
    console.log("Welcome");
    this.modalService.open(business, { size: 'md', backdrop: 'static' ,ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  addBusinessUnit(formObj)
  {
      
    console.log(formObj);
    this.bunitService.createBusinessunits(formObj).subscribe((response) => {
      //$("#addUser").modal("hide");
      this.modalService.dismissAll();
      //sweetalert message popup
      Swal.fire({
        title: 'Success!!',
        text:   "Business Unit has been added successfully",
        icon: 'success'
      });

      this.getLatestBunit();
      console.log("Bunit Has been Added")
     });
       
  }
  deleteBunit(bunit)
  {
    if(confirm("Are you sure to delete "+bunit.unit)) {
   this.bunitService.deleteBunit(bunit).subscribe(response => {
     this.getLatestBunit();
   });
  }
  }
 
  editBunit(bunit){
    this.isEdit=true;
   this.businessObj=bunit;
   
  }
  
  updateBunit()
  {
    this.isEdit=!(this.isEdit);
    this.bunitService.upateBunit(this.businessObj).subscribe(response => {
      this.modalService.dismissAll();
      //sweetalert message popup
      Swal.fire({
        title: 'Success!!',
        text:   "Business Unit has been updated successfully",
        icon: 'success'
      });
     this.getLatestBunit();

   });
  }
   getLatestBunit()
   {
     this.bunitService.getBusinessUnits().subscribe(response => {
       this.bunitList=response as BusinessUnitLists[]
     });
    
 
   }
  
  
  log(x){
    console.log(x)
  }

}
