import { Component, OnInit } from '@angular/core';
import { AttributeService } from 'src/app/services/attribute.service'
import { Observable } from "rxjs";
import { Attribute } from 'src/app/common/attribute';


@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {

  attributes: Observable<Attribute[]>;

  constructor(private attributeService: AttributeService) { } // inject dependency AttributeService

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.attributes = this.attributeService.getAttributesList();
  }


}
