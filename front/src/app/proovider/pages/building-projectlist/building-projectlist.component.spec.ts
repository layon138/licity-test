import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProjectlistComponent } from './building-projectlist.component';

describe('BuildingProjectlistComponent', () => {
  let component: BuildingProjectlistComponent;
  let fixture: ComponentFixture<BuildingProjectlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingProjectlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingProjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
