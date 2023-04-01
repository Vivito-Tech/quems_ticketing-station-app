import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GenericFormComponent } from '@shared/components/generic-form/generic-form.component';
import { Transaction } from 'app/shared/classes/Transaction';
import { Transactions } from 'app/shared/constants/Transactions';
import { GenerateQueueTicketForm } from '../../constants/GenerateQueueTicketForm';

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
    createQueueTicketForm = GenerateQueueTicketForm;
    transactions: Transaction[] = Transactions;

    constructor(private _dialog: MatDialog, private _router: Router) {}

    transactionSelected(transaction: Transaction) {
        this.createQueueTicketForm.formTitle = `Generate ${transaction.transactionName} Queue Ticket`;

        this._dialog
            .open(GenericFormComponent, {
                data: this.createQueueTicketForm,
                panelClass: 'position-relative',
                width: '768px',
            })
            .afterClosed()
            .subscribe({
                next: (data: { customerName: string }) => {
                    if (!data.customerName.length) return;
                    this._router.navigate(['/transactions/ticket-view'], {
                        queryParams: {
                            transactionId: transaction.transactionId,
                            transactionName: transaction.transactionName,
                            for: data.customerName,
                        },
                    });
                },
            });
    }
}
