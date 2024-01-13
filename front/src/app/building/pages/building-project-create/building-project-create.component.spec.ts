import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProjectCreateComponent } from './building-project-create.component';

describe('BuildingProjectCreateComponent', () => {
  let component: BuildingProjectCreateComponent;
  let fixture: ComponentFixture<BuildingProjectCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuildingProjectCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildingProjectCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
