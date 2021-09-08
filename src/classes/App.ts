import { Chocolat } from './decorateur/Chocolat';
import { Colombia } from './Colombia';
import { Lait } from './decorateur/Lait';
import { Drink } from "./drink";
import { Expresso } from "./Expresso";
// import { Expresso } from "./Expresso";

export class App {

    static main() {

    
        let colombia: Drink = new Colombia();
        colombia = new Lait(colombia);
        colombia.setSize(Drink.SMALL);
        colombia = new Chocolat(colombia);
        return colombia.getDescription() + " €" + colombia.cout().toFixed(2);

    }

    static main2() {
        const bois: Drink = new Expresso();

        // bois.setTaille("M");
        bois.setSize(Drink.MEDIUM);

        return bois.getDescription() + " €" + bois.cout().toFixed(2);

        // console.log(bois.cout());
    }
}