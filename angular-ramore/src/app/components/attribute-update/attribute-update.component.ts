import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AttributeService } from 'src/app/services/attribute.service';
import { Attribute } from 'src/app/common/attribute';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-attribute-update',
  templateUrl: './attribute-update.component.html',
  styleUrls: ['./attribute-update.component.css']
})
export class AttributeUpdateComponent implements OnInit {

  attribute: Attribute = new Attribute();
  @ViewChild('f') submitForm: NgForm;

  constructor(private route: ActivatedRoute, private attributeService: AttributeService,
    private router: Router) { }

  ngOnInit(): void {
    this.attribute = new Attribute();

    this.attribute.attrId = this.route.snapshot.params['id'];
    
    this.attributeService.getAttribute(this.attribute.attrId)
      .subscribe(data => {
        console.log(data)
        this.attribute = data;
      }, error => console.log(error));
  }

  updateAttribute() {
    this.attributeService.updateAttribute(this.attribute.attrId, this.attribute)
      .subscribe(data => {
        console.log(data);
        this.attribute = new Attribute();
        this.router.navigate(['/attributes']);
      }, error => console.log(error));
  }

  onSubmit() {
    console.log(this.submitForm);
    this.updateAttribute();    
  }

  deleteAttribute(id: number) {
    this.attributeService.deleteAttribute(id)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/attributes']);
        },
        error => console.log(error));
  }

}
