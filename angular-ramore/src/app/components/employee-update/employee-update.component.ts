import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/common/employee';
import { AttributeService } from 'src/app/services/attribute.service';
import { Attribute } from 'src/app/common/attribute';
import { Observable } from 'rxjs';

import { NgForm } from '@angular/forms';

import { environment } from '../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  attributes: Observable<Attribute[]>;
  employee: Employee = new Employee();
  cbChecked: any[] = [];
  updatedAttrList: Attribute[] = [];

  attribute: Attribute = new Attribute();
  @ViewChild('f') submitForm: NgForm;

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private attributeService: AttributeService
  ) {}

  ngOnInit(): void {
    this.reloadData();
    this.employee = new Employee();
    this.employee.empId = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.employee.empId).subscribe(
      (data) => {
        console.log(data);
        this.employee = data;
        this.employee.attributeList.forEach(element => {
          this.cbChecked.push(element.attrId).toString();
        });
      },
      (error) => console.log(error)
    ); 

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

  updateEmployee() {

    this.employeeService
      .updateEmployee(this.employee.empId, this.employee)
      .subscribe(
        (data) => {
          console.log(data);
          this.employee = new Employee();
          this.router.navigate(['/employees']);
        },
        (error) => console.log(error)
      );
  }

  onSubmit() {
    this.cbChecked.forEach(element => {
      let attr: Attribute = new Attribute();
      attr.attrId = element; 
      this.updatedAttrList.push(attr);
   });
   this.employee.attributeList = this.updatedAttrList;
    this.updateEmployee();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/employees']);
      },
      (error) => console.log(error)
    );
  }

  onChange(e) {
    console.log(e.target.value);
    let id = parseInt(e.target.value);
    if (id > 0 && !this.cbChecked.includes(id)) {
      this.cbChecked.push(id);
    } else if (this.cbChecked.includes(id)) {
      const index = this.cbChecked.indexOf(id);
      this.cbChecked.splice(index, 1);
    }
    console.log(this.cbChecked);
  }

}
