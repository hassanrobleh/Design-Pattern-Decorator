import { Boisson } from "./Boisson";

export class Sumatra extends Boisson {

    constructor() {
        super();
        this.description = "Délicieux et corsé";
    }

    cout() {
        return 2;
    }

}