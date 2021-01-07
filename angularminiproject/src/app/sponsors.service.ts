import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { SponsorLists } from './sponsors/sponsor-lists';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private httpClient:HttpClient) { }

  createSponsors(addResource: any){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post('http://localhost:3000/sponsors',addResource);
  }
  upateSponsor(sponsor)
  {
     return this.httpClient.put('http://localhost:3000/sponsors/' +sponsor.id,sponsor);
   }

     deleteSponsor(sponsor)
     {
      return this.httpClient.delete('http://localhost:3000/sponsors/' +sponsor.id);
     }

  getSponsors(){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.get<SponsorLists[]>('http://localhost:3000/sponsors')
  }
}
