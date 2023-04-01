import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
    signInForm: FormGroup = new FormGroup({
        userId: new FormControl(''),
        passCode: new FormControl(''),
    });
}
