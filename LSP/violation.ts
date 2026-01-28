console.log("Start");
interface Bird {
    fly(): void;
}

class Penguin implements Bird {
    fly(): void {
        throw new Error("Penguins cannot fly");
    }
}
class Sparrow implements Bird {
    fly(): void {
        console.log("Sparrow is flying");
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}
makeBirdFly(new Sparrow());
makeBirdFly(new Penguin());