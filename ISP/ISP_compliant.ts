// Interfaces
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}
class Human implements Workable, Eatable, Sleepable {
    work() { console.log("Human working"); }
    eat() { console.log("Human eating"); }
    sleep() { console.log("Human sleeping"); }
}
class Robot implements Workable {
    work() { console.log("Robot working"); }
}
//now the client code is safe
