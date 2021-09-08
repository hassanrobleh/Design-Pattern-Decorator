import { Drink } from "../drink";

export abstract class Decorateur extends Drink {

    // description: string = "";

    abstract getDescription(): string
}