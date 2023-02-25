import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SIGNIN_ROUTES } from './sign-in-routing.module';
import { GenericCardComponent } from '@components/generic-card';
import { ButtonComponent } from '@components/button';

const IMPORTED_COMPONENTS = [ButtonComponent, GenericCardComponent];
const MODULE_COMPONENTS = [SignInPageComponent, SignInFormComponent];

@NgModule({
    declarations: [IMPORTED_COMPONENTS, MODULE_COMPONENTS],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(SIGNIN_ROUTES)],
    exports: [],
})
export class SignInModule {}
