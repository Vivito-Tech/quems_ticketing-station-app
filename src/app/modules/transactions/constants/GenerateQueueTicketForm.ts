import { FormFields, GenericForm } from '@shared/classes';

export const GenerateQueueTicketForm: GenericForm = {
    buttonLabel: 'Generate Ticket',
    formTitle: 'Generate Queue Ticket',
    formDescription: 'Fill the forms below to get a queue ticket started',
    formFields: [
        new FormFields({
            name: 'customerName',
            label: 'Customer Name',
            widthClass: 'col-lg-12',
            placeHolder: 'Ex: John Doe',
            type: 'text',
        }),
    ],
};
