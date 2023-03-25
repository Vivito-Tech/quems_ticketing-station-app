import { Routes } from '@angular/router';
import { TicketViewComponent } from './pages/ticket-view/ticket-view.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

export const TRANSACTION_ROUTES: Routes = [
    {
        path: '',
        component: TransactionsComponent,
    },
    {
        path: 'ticket-view',
        component: TicketViewComponent,
    },
];
