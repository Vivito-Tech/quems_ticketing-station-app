/** Angular Imports **/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';

/** Module Level Imports */
import { TRANSACTION_ROUTES } from './transaction-routing.module';
import { TransactionsComponent } from './pages/transactions/transactions.component';

/** Shared Imports */
import { ButtonComponent, TransactionCardComponent } from '@shared/components';
import { TicketViewComponent } from './pages/ticket-view/ticket-view.component';
import { QueueTicketComponent } from '@shared/components/queue-ticket/queue-ticket.component';

/** Readability */
const IMPORTED_COMPONENTS = [ButtonComponent, QueueTicketComponent, TransactionCardComponent];
const MODULE_COMPONENTS = [TransactionsComponent];
const ANGULAR_MATERIAL = [MatDialogModule];

@NgModule({
    declarations: [MODULE_COMPONENTS, TicketViewComponent],
    imports: [CommonModule, ANGULAR_MATERIAL, IMPORTED_COMPONENTS, RouterModule.forChild(TRANSACTION_ROUTES)],
})
export class TransactionsModule {}
