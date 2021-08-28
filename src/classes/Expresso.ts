import { Boisson } from "./Boisson";

export class Expresso extends Boisson {

    constructor() {
        super()
        this.description = "Expresso:";
    }

    // getTaille() {
    //     return this.taille;
    // }

    cout() {
        // if(this.taille === "M") {
        //     return 2.5;
        // } else if(this.taille === "XL") {
        //     return 3.0
        // }
        return 1.99
    }

}