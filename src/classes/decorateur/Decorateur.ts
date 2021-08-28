import { Boisson } from "../Boisson";

export abstract class Decorateur extends Boisson {

    // description: string = "";

    abstract getDescription(): string
}