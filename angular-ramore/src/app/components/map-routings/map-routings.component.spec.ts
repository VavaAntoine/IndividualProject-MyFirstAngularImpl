import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRoutingsComponent } from './map-routings.component';

describe('MapRoutingsComponent', () => {
  let component: MapRoutingsComponent;
  let fixture: ComponentFixture<MapRoutingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapRoutingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRoutingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
