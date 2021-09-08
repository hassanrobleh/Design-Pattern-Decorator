export abstract class Drink {

    description: string = "Boisson inconnue";
    
    static SMALL: string = "S"
    static MEDIUM: string = "M"
    static LARGE: string = "XL"

    taille: string = Drink.SMALL;

    getDescription() {
        return this.description
    }

    setSize(t: string) {
        this.taille = t;
    }

    getSize() {
        return this.taille;
    }

    abstract cout(): number
}