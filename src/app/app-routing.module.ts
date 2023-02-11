import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes or URLs
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }