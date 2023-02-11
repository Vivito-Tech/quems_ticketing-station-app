import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CONTACT_ROUTES } from './contact-routing.module';

@NgModule({
    declarations: [
        ContactComponent,
        ContactFormComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(CONTACT_ROUTES)
    ]
})
export class ContactModule { }
