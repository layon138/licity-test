import { ChangeDetectorRef, Component } from '@angular/core';
import { BuildingService } from '../../services/building.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder, ValidationErrors, ValidatorFn } from '@angular/forms';
import dayjs from 'dayjs';
import { async } from 'rxjs';

@Component({
  selector: 'app-building-project-create',
  templateUrl: './building-project-create.component.html',
  styleUrl: './building-project-create.component.css'
})
export class BuildingProjectCreateComponent {
  buildingProjectForm: FormGroup;
  canSeeAlertSucces=false;
  canSeeAlertError=false;
  constructor(private buildingService:BuildingService,private fb: FormBuilder,   private cd: ChangeDetectorRef){
    this.buildingProjectForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required,this.validateMinDate('dateStart')]),
      dateStart: new FormControl('',[Validators.required,this.validateMaxDate('dateEnd')]),
      unitValue: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$"),] ),
      items: new FormArray([  ], Validators.required),
      imagesReference: new FormArray([  ], Validators.required),
    });
  }

  validateMinDate(minDate:string): any {  
    return (form: FormGroup): ValidationErrors | null => {
        if (form?.value) {
  
          const isRangeValid = dayjs(form?.value).isAfter(
            dayjs(this.buildingProjectForm.get(minDate)?.value)
          );
            if(isRangeValid && !this.buildingProjectForm.get(minDate)?.valid){
              this.buildingProjectForm.get(minDate)?.updateValueAndValidity();
            }
         
          return isRangeValid  ? null : { min_date: true };
        }
        return null;
      };
    }

    validateMaxDate(maxDate:string): any {  
      return (form: FormGroup): ValidationErrors | null => {
          if (form?.value) {
    
            const isRangeValid = dayjs(form?.value).isBefore(
              dayjs(this.buildingProjectForm.get(maxDate)?.value)
            );
            if(isRangeValid && !this.buildingProjectForm.get(maxDate)?.valid){
               this.buildingProjectForm.get(maxDate)?.updateValueAndValidity();
            }
        
            return isRangeValid  ? null : { min_date: true };
          }
          return null;
        };
      }

  get itemsFormArray() :FormArray {
    return <FormArray>this.buildingProjectForm.get('items');
  }

  get imagesReferenceFormArray() :FormArray {
    return <FormArray>this.buildingProjectForm.get('imagesReference');
  }
  

  async ngOnInit(): Promise<void> {
  this.addNewItem();
  this.addImagesReference();
  }

  addImagesReference(){
    const group = new FormGroup({
      image: new FormControl('', Validators.compose([Validators.required,])),
    });
    this.imagesReferenceFormArray.push(group);
  }

  addNewItem(){
    const group = new FormGroup({
      description: new FormControl('', Validators.compose([Validators.required,])),
    });
    this.itemsFormArray.push(group);
  }

  handleUpload($event:any,index:number) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
     this.imagesReferenceFormArray.controls[index]?.setValue({
      image:reader.result 
      })

    };
}

  async createBuildingProyect() {
    console.log(this.buildingProjectForm)
    if(this.buildingProjectForm.valid){
      const resp= await this.buildingService.addBuildingProject(this.buildingProjectForm.value);
      resp.status ? this.showAlertSuccess():this.showAlertError();
    }else{
      this.buildingProjectForm.markAllAsTouched();
    }
   
  }

  showAlertSuccess(){
    this.canSeeAlertSucces=true;
    setTimeout(() => {
      this.canSeeAlertSucces=false;
    }, 2000);
  }


  showAlertError(){
    this.canSeeAlertError=true;
    setTimeout(() => {
      this.canSeeAlertError=false;
    }, 2000);
  }




}
