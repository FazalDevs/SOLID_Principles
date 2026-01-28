class MySQLDatabase {
    save(order: string) {
        console.log(`Saving order "${order}" to MySQL`);
    }
}

class StripePaymentGateway {
    charge(amount: number) {
        console.log(`Charging ${amount} via Stripe`);
    }
}

class OrderService {
    private db = new MySQLDatabase();
    private payment = new StripePaymentGateway();

    placeOrder(order: string, amount: number) {
        this.db.save(order);
        this.payment.charge(amount);
        console.log("Order placed successfully");
    }
}
