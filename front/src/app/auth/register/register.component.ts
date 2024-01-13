import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  public showDropDawn=false
  constructor(private authService:AuthService,private router:Router) {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  showDropdown(){
  this.showDropDawn=!this.showDropDawn
  }

  saveRole(value:string){
  this.registerForm.get('role')?.setValue(value)
  this.showDropDawn=false;
  }



  async registerAPi(){
    if(this.registerForm.valid){
      const res=await this.authService.registerUser(this.registerForm.value);
      if(res.status==='success'){
        await this.router.navigateByUrl(`auth/login`, { replaceUrl: true });
      }
    }else{
      this.registerForm.markAllAsTouched();
    }
  
  }
}
