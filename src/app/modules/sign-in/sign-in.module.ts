/** Angular Imports **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Module Level Imports */
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SIGNIN_ROUTES } from './sign-in-routing.module';

/** Shared Imports */
import { ButtonComponent, GenericCardComponent } from '@shared/components';

/** Readability */
const IMPORTED_COMPONENTS = [ButtonComponent, GenericCardComponent];
const MODULE_COMPONENTS = [SignInPageComponent, SignInFormComponent];

@NgModule({
    declarations: [MODULE_COMPONENTS],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, IMPORTED_COMPONENTS, RouterModule.forChild(SIGNIN_ROUTES)],
    exports: [],
})
export class SignInModule {}
