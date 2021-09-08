import { Drink } from "../drink";
import { Decorateur } from "./Decorateur"

export class Chocolat extends Decorateur {

    drink: Drink;

    constructor(drink: Drink) {
        super()
        this.drink = drink;
    }

    getTaille() {
        return this.drink.getSize();
    }

    getDescription(): string {
        return this.drink.getDescription() + " Chocolat,";
    }

    // cout() {
    //     return 0.30 + this.boisson.cout();
    // }

    cout() {

        let cout: number = this.drink.cout();
        if(this.getTaille() === Drink.SMALL) {
            cout += .10;
        } else if(this.getTaille() === Drink.MEDIUM){
            cout += .15
        } else if(this.getTaille() === Drink.LARGE) {
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