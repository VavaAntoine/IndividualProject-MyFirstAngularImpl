import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeService } from 'src/app/services/attribute.service'
import { Observable } from "rxjs";
import { Attribute } from 'src/app/common/attribute';
import { Employee } from 'src/app/common/employee';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.css']
})
export class MapSearchComponent implements OnInit {

  attributes: Observable<Attribute[]>;
  employees: Observable<Employee[]>;
  emps: Employee[];
  searchByAttrId: number;
  continueForEmpId: number;
  isValid: boolean = false;

  constructor(private attributeService: AttributeService,     
    private router: Router ) { }   // inject dependency AttributeService

  ngOnInit(): void {
    this.loadAttributes();
  }

  loadAttributes() {
    this.attributes = this.attributeService.getAttributesList();
  }

  reloadOnChangeEmployees() {
    this.continueForEmpId = -1;
    this.employees = this.attributeService.searchEmployeesByAttribute(this.searchByAttrId);
  }

  onAttributeChange(e) {
    console.log(e.target.id);
    this.searchByAttrId = e.target.id;
    this.continueForEmpId = 0;
    this.isValid = false;
    sessionStorage.setItem('searchByAttrId', String(this.searchByAttrId));
    this.reloadOnChangeEmployees();

  }

  onEmployeeChange(e) {
    console.log(e.target.id);
    this.continueForEmpId = e.target.id;
    sessionStorage.setItem('continueForEmpId', String(this.continueForEmpId));
    if(this.continueForEmpId > 0) {
      this.isValid = true;
    }
  }

  onClick() {
    this.router.navigate(['/mapRouting']);
  }

}
