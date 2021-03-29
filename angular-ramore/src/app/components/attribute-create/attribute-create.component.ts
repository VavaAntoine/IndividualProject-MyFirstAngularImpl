import { Component, OnInit, ViewChild } from '@angular/core';
import { AttributeService } from 'src/app/services/attribute.service';
import { Router } from '@angular/router';
import { Attribute } from 'src/app/common/attribute';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attribute-create',
  templateUrl: './attribute-create.component.html',
  styleUrls: ['./attribute-create.component.css']
})
export class AttributeCreateComponent implements OnInit {

  attribute: Attribute = new Attribute();
  @ViewChild('f') submitForm: NgForm;

  constructor(private attributeService: AttributeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newAttribute(): void {
    this.attribute = new Attribute();
  }

  save() {
    this.attributeService
    .createAttribute(this.attribute).subscribe(data => {
      console.log(data)
      this.attribute = new Attribute();
      this.router.navigate(['/attributes']);
    }, 
    error => console.log(error));
  }

  onSubmit() {
    console.log(this.submitForm);
    this.save();    
  }

}
