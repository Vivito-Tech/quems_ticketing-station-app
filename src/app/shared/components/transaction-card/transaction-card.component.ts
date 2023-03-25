import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '@shared/classes';
import { ButtonComponent, GenericCardComponent } from '@shared/components';

@Component({
    selector: 'app-transaction-card',
    standalone: true,
    imports: [GenericCardComponent, ButtonComponent],
    templateUrl: './transaction-card.component.html',
    styleUrls: ['./transaction-card.component.scss'],
})
export class TransactionCardComponent {
    @Input() transaction!: Transaction;
    @Output() selected: EventEmitter<string> = new EventEmitter();
}
