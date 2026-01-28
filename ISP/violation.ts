// Fat interface
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

class Human implements Worker {
    work() { console.log("Human working"); }
    eat() { console.log("Human eating"); }
    sleep() { console.log("Human sleeping"); }
}

class Robot implements Worker {
    work() { console.log("Robot working"); }

    // Problem! Robots don't eat or sleep
    eat() { throw new Error("Robot does not eat"); }
    sleep() { throw new Error("Robot does not sleep"); }
}
