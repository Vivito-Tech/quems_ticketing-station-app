import { Transaction } from "../classes/Transaction";
export const Transactions = [
    new Transaction({
        transactionName: 'Deposit',
        transactionDescription: 'Direct deposit to an account',
        transactionId: 'transaction_deposit',
        transactionIcon: 'fa-solid fa-piggy-bank'
    }),
    new Transaction({
        transactionName: 'New Account',
        transactionDescription: 'New customer account',
        transactionId: 'transaction_new-account',
        transactionIcon: 'fa-solid fa-user-plus'
    }),
    new Transaction({
        transactionName: 'Payments',
        transactionDescription: 'Pay bills over the counter',
        transactionId: 'transaction_pay',
        transactionIcon: 'fa-sharp fa-solid fa-cash-register'
    }),
    new Transaction({
        transactionName: 'Inquiry',
        transactionDescription: 'Customer support, inquiry',
        transactionId: 'transaction_inquiry',
        transactionIcon: 'fa-solid fa-question'
    })
]