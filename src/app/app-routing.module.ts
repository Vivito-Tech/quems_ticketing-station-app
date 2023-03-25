import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes or URLs
const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule),
    },
    {
        path: 'transactions',
        loadChildren: () => import('./modules/transactions/transactions.module').then(m => m.TransactionsModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
