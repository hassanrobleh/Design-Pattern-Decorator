import { Drink } from "./drink";

export class Sumatra extends Drink {

    constructor() {
        super();
        this.description = "Délicieux et corsé";
    }

    cout() {
        return 2;
    }

}