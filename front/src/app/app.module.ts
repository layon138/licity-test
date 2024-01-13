import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BuildingProjectlistComponent } from './proovider/pages/building-projectlist/building-projectlist.component';
import { BuildingProjectCreateComponent } from './building/pages/building-project-create/building-project-create.component';
import { CardInfoComponent } from './proovider/components/card-info/card-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingProjectlistComponent,
    BuildingProjectCreateComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterOutlet,
    AuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
