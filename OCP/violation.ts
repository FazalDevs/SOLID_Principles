export class PaymentService {
    pay(amount: number, method: string): void {
        if (method === "card") {
            console.log(`Paid ${amount} using credit card`);
        } else if (method === "paypal") {
            console.log(`Paid ${amount} using PayPal`);
        } else if (method === "crypto") {
            console.log(`Paid ${amount} using crypto`);
        } else {
            throw new Error("Unsupported payment method");
        }
    }
}
