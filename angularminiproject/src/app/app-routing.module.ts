import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) },
   { path: 'businessunits', loadChildren: () => import('./businessunits/businessunits.module').then(m => m.BusinessunitsModule) }, 
   { path: 'sponsors', loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
