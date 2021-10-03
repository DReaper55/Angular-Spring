import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeServiceService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularModulesModule } from '../app/angular.modules.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { CreateUserComponent } from './create/create-user/create-user.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    HomePageComponent,
    UserListComponent,
    UserDetailsComponent,
    UpdateUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularModulesModule,

    MatToolbarModule,
    MatButtonModule

  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
