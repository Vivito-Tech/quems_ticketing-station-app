import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormFields, GenericForm } from '@shared/classes';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-generic-form',
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, ButtonComponent],
    standalone: true,
    templateUrl: './generic-form.component.html',
    styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent implements OnInit {
    @Input() formData!: GenericForm;
    genericFormGroup!: FormGroup;

    constructor(@Optional() @Inject(MAT_DIALOG_DATA) public _dialogData: GenericForm, private _dialogRef: MatDialogRef<GenericFormComponent>) {}

    ngOnInit() {
        if (this._dialogData) {
            this.formData = this._dialogData;
        }

        this.createForm();
    }

    createForm() {
        if (!this.formData) return;

        let formControls = {};

        this.formData.formFields?.forEach((f: FormFields) =>
            Object.assign(formControls, {
                [f.name]: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
            })
        );

        this.genericFormGroup = new FormGroup(formControls);
    }

    submitForm() {
        if (this._dialogData && this.genericFormGroup.value) this._dialogRef.close(this.genericFormGroup.value);
    }
}
