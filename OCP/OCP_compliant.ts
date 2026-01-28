export interface PaymentMethod {
    pay(amount: number): void;
}
//this is the extension point


//implementing concrete behaviours

export class CardPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} using credit card`);
    }
}

export class PaypalPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal`);
    }
}

export class CryptoPayment implements PaymentMethod {
    pay(amount: number): void {
        console.log(`Paid ${amount} using crypto`);
    }
}

//zero modification in existing code
export class PaymentService {
    pay(amount: number, method: PaymentMethod): void {
        method.pay(amount);
    }
}