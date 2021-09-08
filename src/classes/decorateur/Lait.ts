import { Drink } from "../drink"
import { Decorateur } from "./Decorateur"

export class Lait extends Decorateur {

    boisson: Drink;

    constructor(b: Drink) {
        super()
        this.boisson = b;
        
    }

    getDescription(): string {
        return this.boisson.getDescription() + " Lait,";
    }

    cout() {
        return 0.20 + this.boisson.cout()
    }
}