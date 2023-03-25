export class Transaction {
    transactionDescription: string;
    transactionIcon: string;
    transactionId: string
    transactionName: string;

    constructor(t: {
        transactionName: string;
        transactionDescription: string;
        transactionId: string;
        transactionIcon: string;
    }) {
        this.transactionId = t.transactionId
        this.transactionName = t.transactionName;
        this.transactionDescription = t.transactionDescription;
        this.transactionIcon = t.transactionIcon;
    }
}