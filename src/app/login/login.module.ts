import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { LOGIN_ROUTES } from './login-routing.module';

@NgModule({
  declarations: [
    // Login Page
    LoginComponent,

    // Login Form
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LOGIN_ROUTES)
  ], 
})

export class LoginModule { }