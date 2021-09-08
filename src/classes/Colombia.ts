import { Drink } from "./drink";

export class Colombia extends Drink {

    constructor() {
        super()
        this.description = "Colombia:";
    }

    cout() {
        return 1;
    }

}