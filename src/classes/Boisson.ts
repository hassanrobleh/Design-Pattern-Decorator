export abstract class Boisson {

    description: string = "Boisson inconnue";
    
    static PETITE: string = "S"
    static NORMAL: string = "M"
    static GRANDE: string = "XL"

    taille: string = Boisson.PETITE;

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