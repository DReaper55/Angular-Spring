import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create/create-user/create-user.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UpdateUserComponent } from './update-user/update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details/user-details.component';
import { UserListComponent } from './user-list/user-list/user-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user',
    component: CreateUserComponent
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
