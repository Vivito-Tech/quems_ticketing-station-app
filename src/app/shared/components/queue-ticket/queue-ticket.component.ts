import { SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { ButtonComponent } from '../button/button.component';
import { GenericCardComponent } from '../generic-card/generic-card.component';

@Component({
    selector: 'app-queue-ticket',
    imports: [ButtonComponent, GenericCardComponent, QRCodeModule, SlicePipe],
    standalone: true,
    templateUrl: './queue-ticket.component.html',
    styleUrls: ['./queue-ticket.component.scss'],
})
export class QueueTicketComponent {
    @Input() ticketData: any;
}
