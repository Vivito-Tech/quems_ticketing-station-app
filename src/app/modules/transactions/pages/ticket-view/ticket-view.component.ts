import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-ticket-view',
    templateUrl: './ticket-view.component.html',
    styleUrls: ['./ticket-view.component.scss'],
})
export class TicketViewComponent implements OnInit {
    transactionData!: { transaction: string; for: string };
    constructor(private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit(): void {
        this._route.queryParams.subscribe((params: any) => {
            this.transactionData = params;
        });
    }

    newTicket() {
        this._router.navigate(['/transactions']);
    }
}
