import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SIGNIN_ROUTES } from './sign-in-routing.module';

@NgModule({
    declarations: [SignInPageComponent, SignInFormComponent],
    imports: [CommonModule, RouterModule.forChild(SIGNIN_ROUTES)],
    exports: [],
})
export class SignInModule {}
