export abstract class Boisson {

    description: string = "Boisson inconnue";
    
    static SMALL: string = "S"
    static MEDIUM: string = "M"
    static LARGE: string = "XL"

    taille: string = Boisson.SMALL;

    getDescription() {
        return this.description
    }

    setTaille(t: string) {
        this.taille = t;
    }

    getTaille() {
        return this.taille;
    }

    abstract cout(): number
}