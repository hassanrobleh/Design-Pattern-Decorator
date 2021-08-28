import { Boisson } from "./Boisson";

export class Colombia extends Boisson {

    constructor() {
        super()
        this.description = "Colombia:";
    }

    cout() {
        return 1;
    }

}