import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Employee } from 'src/app/common/employee';
import { Observable } from 'rxjs';
import { AttributeService } from 'src/app/services/attribute.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map-routings',
  templateUrl: './map-routings.component.html',
  styleUrls: ['./map-routings.component.css'],
})
export class MapRoutingsComponent {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.9674565;
  lng = 23.743905;
  continueForEmpId: number;
  searchByAttrId: number;

  emps: Observable<Employee[]>;
  employeesNoObs: any[];

  public constructor(private attributeService: AttributeService) {}

  async ngOnInit() {
    this.continueForEmpId = JSON.parse(
      sessionStorage.getItem('continueForEmpId')
    );
    this.searchByAttrId = JSON.parse(sessionStorage.getItem('searchByAttrId'));

    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      center: [this.lng, this.lat],
      zoom: 10,
    });

    await this.loadEmployees();
  }

  createMarker(lng: number, lat: number, coulor: string, template: string) {
    const marker = new mapboxgl.Marker({ color: coulor })
      .setLngLat([lng, lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(template))
      .addTo(this.map);
  }

  async loadEmployees() {
    this.emps = this.attributeService.searchEmployeesByAttribute(
      this.searchByAttrId
    );
    await this.attributeService
      .searchEmployeesByAttribute(this.searchByAttrId)
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);

        let arrayfrom,
          arrayTo = [];
        let fromPlace,
          toPlace = ' ';


        posts.forEach(element => {
          if (element.empId == this.continueForEmpId) {
            arrayfrom = element.empAddress.split(' ');
            fromPlace = arrayfrom.join('+');
          }
        });

        posts.forEach(element => {
          if (element.empId == this.continueForEmpId) {
            this.createMarker(
              Number(element.empLongitude),
              Number(element.empLatitude),
              'DarkSlateBlue',
              'Chosen Employee'
            );
          } else {
            arrayTo = element.empAddress.split(' ');
            toPlace = arrayTo.join('+');
            let linkToRoute =
              'https://www.google.com/maps/dir/' + fromPlace + '/' + toPlace;
            let tmplt = `<a href = "${linkToRoute}" target="_blank"> Routing <\a>`;
            this.createMarker(
              Number(element.empLongitude),
              Number(element.empLatitude),
              'DarkTurquoise',
              tmplt
            );
          }
        });

      });
  }
}
