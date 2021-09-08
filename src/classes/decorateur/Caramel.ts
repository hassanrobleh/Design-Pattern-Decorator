import { Drink } from "../drink";
import { Decorateur } from "./Decorateur"

export class Camarel extends Decorateur {

    drink: Drink;

    constructor(b: Drink) {
        super()
        this.drink = b;
    }

    getTaille() {
        return this.drink.getSize();
    }

    getDescription(): string {
        return this.drink.getDescription() + " Caramel,";
    }

    cout() {
        return 0.30 + this.drink.cout();
    }
}