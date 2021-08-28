import { Boisson } from "../Boisson";
import { Decorateur } from "./Decorateur"

export class Camarel extends Decorateur {

    boisson: Boisson;

    constructor(b: Boisson) {
        super()
        this.boisson = b;
    }

    getTaille() {
        return this.boisson.getTaille();
    }

    getDescription(): string {
        return this.boisson.getDescription() + " Caramel,";
    }

    cout() {
        return 0.30 + this.boisson.cout();
    }
}