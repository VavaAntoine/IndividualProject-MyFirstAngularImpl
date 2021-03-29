import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/common/employee';
import { AttributeService } from 'src/app/services/attribute.service';
import { Attribute } from 'src/app/common/attribute';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  attributes: Observable<Attribute[]>;
  employee: Employee = new Employee();
  cbChecked: number[] = [];
  updatedAttrList: Attribute[] = [];

  attribute: Attribute = new Attribute();
  @ViewChild('f') submitForm: NgForm;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
    
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private attributeService: AttributeService
  ) {}

  ngOnInit(): void {
    this.reloadData();
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [23.866521, 38.041781],
      zoom: 13,
    });

    this.map.on('click', function (e) {
      (<HTMLInputElement>document.getElementById('empLatitude')).value = JSON.stringify(e.lngLat.wrap().lat);
      (<HTMLInputElement>document.getElementById('empLongitude')).value = JSON.stringify(e.lngLat.wrap().lng);
      (<HTMLInputElement>document.getElementById('empLatitude')).dispatchEvent(new Event("input"));
      (<HTMLInputElement>document.getElementById('empLongitude')).dispatchEvent(new Event("input"));
      });

  }

  reloadData() {
    this.attributes = this.attributeService.getAttributesList();
  }

  newEmployee(): void {
    this.employee = new Employee();
  }

  save() {
    this.cbChecked.forEach(element => {
       let attr: Attribute = new Attribute();
       attr.attrId = element; 
       this.updatedAttrList.push(attr);
    });
    this.employee.attributeList = this.updatedAttrList;
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        this.employee = new Employee();
        this.router.navigate(['/employees']);
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.save();
  }

  onChange(e) {
    console.log(e.target.value);
    if (e.target.value > 0 && !this.cbChecked.includes(e.target.value)) {
      this.cbChecked.push(e.target.value);
    } else if (this.cbChecked.includes(e.target.value)) {
      const index = this.cbChecked.indexOf(e.target.value);
      this.cbChecked.splice(index, 1);
    }
    console.log(this.cbChecked);
  }
}
