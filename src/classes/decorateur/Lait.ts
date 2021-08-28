import { Boisson } from "../Boisson"
import { Decorateur } from "./Decorateur"

export class Lait extends Decorateur {

    boisson: Boisson;

    constructor(b: Boisson) {
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