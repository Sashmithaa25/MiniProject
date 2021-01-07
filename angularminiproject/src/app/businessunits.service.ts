import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { BusinessUnitLists } from './businessunits/business-unit-lists';

@Injectable({
  providedIn: 'root'
})
export class BusinessunitsService {

  constructor(private httpClient:HttpClient) { }

  createBusinessunits(addResource: any){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post('http://localhost:3000/businessunits',addResource);
  }
  upateBunit(bunit)
  {
     return this.httpClient.put('http://localhost:3000/businessunits/' +bunit.id,bunit);
   }

     deleteBunit(bunit)
     {
      return this.httpClient.delete('http://localhost:3000/businessunits/' +bunit.id);
     }

  getBusinessUnits(){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.get<BusinessUnitLists[]>('http://localhost:3000/businessunits')
  }
}
