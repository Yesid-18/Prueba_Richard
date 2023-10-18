import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasComponent } from './components/notas/notas.component';
import { CreateNotasComponent } from './components/create-notas/create-notas.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

const routes: Routes = [
  {path:'', component: NotasComponent},
  {path:'notas', component: NotasComponent},
  {path:'create-notas', component: CreateNotasComponent},
  {path:'create-user', component: CreateUserComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
