import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms'
import Swal from 'node_modules/sweetalert2/src/sweetalert2.js';
import {NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { SponsorsService } from '../sponsors.service';
import { SponsorLists } from './sponsor-lists';
import { findLast } from '@angular/compiler/src/directive_resolver';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  isEdit=false;

  sponsorObj = {
     id:'',
     bunit:'',
     sname:'',
     semail:'',
     desp:''
  }
 

  closeResult:string;
  allClients:Object;

  

  public sponsorList: SponsorLists[]= [];
  name:any;
 
  constructor(
    public sponsorService:SponsorsService, 
    private modalService: NgbModal, 
    private ngForm: NgForm)
    {
          
    }
    

  ngOnInit(): void {
    this.sponsorService.getSponsors().subscribe((response) => {
      this.sponsorList=response as SponsorLists[];
});
  }

  open(sponsors) {
    console.log("Welcome");
    this.modalService.open(sponsors, { size: 'md', backdrop: 'static' ,ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  addSponsor(formObj)
  {
      
    console.log(formObj);
    this.sponsorService.createSponsors(formObj).subscribe((response) => {
      //$("#addUser").modal("hide");
      this.modalService.dismissAll();
      //sweetalert message popup
      Swal.fire({
        title: 'Success!!',
        text:   "Sponsor has been added successfully",
        icon: 'success'
      });

      this.getLatestSponsor();
      console.log("Bunit Has been Added")
     });
     
     
  }
  find() 
  {
       return this.sponsorObj.bunit;
  }
  deleteSponsor(sponsor)
  {
    if(confirm("Are you sure to delete "+sponsor.sname)) {
   this.sponsorService.deleteSponsor(sponsor).subscribe(response => {
     this.getLatestSponsor();
   });
  }
  }
 
  editSponsor(sponsor){
    this.isEdit=true;
   this.sponsorObj=sponsor;
   
  }
  
  updateSponsor()
  {
    this.isEdit=!(this.isEdit);
    this.sponsorService.upateSponsor(this.sponsorObj).subscribe(response => {
      this.modalService.dismissAll();
      //sweetalert message popup
      Swal.fire({
        title: 'Success!!',
        text:   "Sponsor has been updated successfully",
        icon: 'success'
      });
     this.getLatestSponsor();

   });
  }
   getLatestSponsor()
   {
     this.sponsorService.getSponsors().subscribe(response => {
       this.sponsorList=response as SponsorLists[]
     });
    
 
   }
  
  
  log(x){
    console.log(x)
  }


}
