import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessunitsComponent } from './businessunits.component';

const routes: Routes = [{ path: '', component: BusinessunitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessunitsRoutingModule { }
