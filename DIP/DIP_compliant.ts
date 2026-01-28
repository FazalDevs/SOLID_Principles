// PaymentGateway.ts
export interface PaymentGateway {
    charge(amount: number): void;
}
// OrderRepository.ts
export interface OrderRepository {
    save(order: string): void;
}


// OrderService.ts
import { PaymentGateway } from "./PaymentGateway";
import { OrderRepository } from "./OrderRepository";

export class OrderService {
    constructor(
        private repo: OrderRepository,
        private payment: PaymentGateway
    ) { }

    placeOrder(order: string, amount: number) {
        this.repo.save(order);
        this.payment.charge(amount);
        console.log("Order placed successfully");
    }
}
