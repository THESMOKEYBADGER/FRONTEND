import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FruitCreateComponent } from './fruit/fruit-create/fruit-create.component';
import { FruitDisplayComponent } from './fruit/fruit-display/fruit-display.component';

const routes: Routes = [
  
  { path: 'list', component: FruitDisplayComponent },
  { path: 'add', component: FruitCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
