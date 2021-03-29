import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AttributeListComponent } from 'src/app/components/attribute-list/attribute-list.component'
import { AttributeCreateComponent } from 'src/app/components/attribute-create/attribute-create.component'
import { AttributeUpdateComponent } from 'src/app/components/attribute-update/attribute-update.component'

import { EmployeeListComponent } from 'src/app/components/employee-list/employee-list.component'
import { EmployeeCreateComponent } from 'src/app/components/employee-create/employee-create.component'
import { EmployeeUpdateComponent } from 'src/app/components/employee-update/employee-update.component'

import { MapSearchComponent } from 'src/app/components/map-search/map-search.component'
import { MapRoutingsComponent } from 'src/app/components/map-routings/map-routings.component'


const routes: Routes = [

  { path: 'attributes', component: AttributeListComponent },
  { path: 'addAttr', component: AttributeCreateComponent },
  { path: 'updateAttr/:id', component: AttributeUpdateComponent },

  { path: 'employees', component: EmployeeListComponent },
  { path: 'addEmp', component: EmployeeCreateComponent },
  { path: 'updateEmp/:id', component: EmployeeUpdateComponent },

  { path: 'search', component: MapSearchComponent },
  { path: 'mapRouting', component: MapRoutingsComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
