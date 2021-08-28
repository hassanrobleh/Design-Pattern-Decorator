import { Boisson } from "../Boisson";
import { Decorateur } from "./Decorateur"

export class Chocolat extends Decorateur {

    boisson: Boisson;

    constructor(b: Boisson) {
        super()
        this.boisson = b;
    }

    getTaille() {
        return this.boisson.getTaille();
    }

    getDescription(): string {
        return this.boisson.getDescription() + " Chocolat,";
    }

    // cout() {
    //     return 0.30 + this.boisson.cout();
    // }

    cout() {

        let cout: number = this.boisson.cout();
        if(this.getTaille() === Boisson.PETITE) {
            cout += .10;
        } else if(this.getTaille() === Boisson.NORMAL){
            cout += .15
        } else if(this.getTaille() === Boisson.GRANDE) {
            cout += .30;
        }

        return cout;
        // if(this.taille === "M") {
        //     return 2.5;
        // } else if(this.taille === "XL") {
        //     return 3.0
        // }
        // return 1.99 + this.boisson.cout();
    }
}