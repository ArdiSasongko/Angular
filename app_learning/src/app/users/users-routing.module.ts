import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';

const routes:Routes = [
  {path:'user',pathMatch:'full',component:UsersComponent},
  {path:'form',pathMatch:'full',component:FormComponent},
  {path:'user/detail/:id',component:DetailComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class UsersRoutingModule { }
