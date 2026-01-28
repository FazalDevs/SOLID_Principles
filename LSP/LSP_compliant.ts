abstract class Bird {
    eat(): void {
        console.log("eating");
    }
}
abstract class FlyingBird extends Bird {
    fly(): void {
        console.log("flying");
    }
}

function makeBirdFly(bird: FlyingBird): void {
    bird.fly();
}
class Sparrow extends FlyingBird {

}
class Penguin extends Bird {

}
makeBirdFly(new Sparrow());
makeBirdFly(new Penguin());//does not work gives errors at compile time;