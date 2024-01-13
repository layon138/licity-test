import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BuildingProjectlistComponent } from './proovider/pages/building-projectlist/building-projectlist.component';
import { BuildingProjectCreateComponent } from './building/pages/building-project-create/building-project-create.component';
import { prooviderAuthenticationGuard } from './proovider/guards/proovider.guard';
import { buildingAuthenticationGuard } from './building/guards/building.guard';

const routes: Routes = [
  {
    path:'*',
    redirectTo:'auth/login',
    
  },
  {
    path:'auth',
   children:[
    {
      path:'login',
     component:LoginComponent
    },
    {
      path:'register',
     component:RegisterComponent
    }
   ]
  },
  {
    path:'proovider',
    component:BuildingProjectlistComponent,
    canActivate: [prooviderAuthenticationGuard]
  },
  {
    path:'building',
    component:BuildingProjectCreateComponent,
    canActivate: [buildingAuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
