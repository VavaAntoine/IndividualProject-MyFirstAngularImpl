import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttributeListComponent } from './components/attribute-list/attribute-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AttributeCreateComponent } from './components/attribute-create/attribute-create.component';
import { AppRoutingModule } from './app-routing.module';
import { AttributeUpdateComponent } from './components/attribute-update/attribute-update.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { MapSearchComponent } from './components/map-search/map-search.component';
import { MapRoutingsComponent } from './components/map-routings/map-routings.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AttributeListComponent,
    AttributeCreateComponent,
    AttributeUpdateComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
    MapSearchComponent,
    MapRoutingsComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
