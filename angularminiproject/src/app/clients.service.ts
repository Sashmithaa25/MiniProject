import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientLists } from './clients/client-lists'


@Injectable({
  providedIn: 'root'
})

export class ClientsService {

 
  constructor(private httpClient:HttpClient) { }

  createClients(addResource: any){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.post('http://localhost:3000/clients',addResource);
  }
  
 upateClients(client)
 {
  return this.httpClient.put('http://localhost:3000/clients/' +client.id,client);
 }

     deleteClient(client)
     {
      return this.httpClient.delete('http://localhost:3000/clients/' +client.id);
     }

  getClients(){
    const httpHeaders =new HttpHeaders();
    httpHeaders.append('content-type','application/json');
    return this.httpClient.get<ClientLists[]>('http://localhost:3000/clients')
  }
}
