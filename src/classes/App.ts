import { Chocolat } from './decorateur/Chocolat';
import { Colombia } from './Colombia';
import { Lait } from './decorateur/Lait';
import { Boisson } from "./Boisson";
import { Expresso } from "./Expresso";
// import { Expresso } from "./Expresso";

export class App {

    static main() {

    
        let colombia: Boisson = new Colombia()
        colombia = new Lait(colombia);
        colombia.setTaille(Boisson.PETITE);
        colombia = new Chocolat(colombia);
        return colombia.getDescription() + " €" + colombia.cout().toFixed(2);

    }

    static main2() {
        const bois: Boisson = new Expresso();

        // bois.setTaille("M");
        bois.setTaille(Boisson.NORMAL);

        return bois.getDescription() + " €" + bois.cout().toFixed(2);

        // console.log(bois.cout());
    }
}