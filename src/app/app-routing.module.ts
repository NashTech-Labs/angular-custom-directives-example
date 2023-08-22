import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NashtechComponent } from './nashtech/nashtech.component';

const routes: Routes = [
  {path: "Users", component:UsersComponent},
  {path: "Nashtech", component:NashtechComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
