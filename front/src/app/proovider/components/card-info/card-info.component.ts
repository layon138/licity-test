import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BuildinProject } from '../../model/provider.model';


@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input() project:BuildinProject={
    _id:'',
    dateEnd:'',
    dateStart:'',
    imagesReference:[],
    name:'',
    unitValue:'',
    items:[]
  }
  public currentImage=0

  changeImage(type:string){
    console.log(type)
    if(type==='left'){
      this.currentImage=this.currentImage-1
      return 
    }
    this.currentImage=this.currentImage+1
    console.log(this.currentImage,this.project.imagesReference.length)
  }
  
}
