import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private authService:AuthService,private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  async loginAPi(){

    if(this.loginForm.valid){
      const res=await this.authService.authUser(this.loginForm.value);
      if(res.status==='success'){
        this.authService.saveUser(JSON.stringify(res.user));
        if(res.user.role=='building'){
          await this.router.navigateByUrl(`building`, { replaceUrl: true });
          return
        }
        await this.router.navigateByUrl(`proovider`, { replaceUrl: true });
      }
    }
  
  }
}
