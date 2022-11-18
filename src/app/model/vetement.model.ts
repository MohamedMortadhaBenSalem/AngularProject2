import { Marque } from "./marque.model";
export class Vetement {
    idVetement!: number;
    nomVetement!: string;
    prixVetement!: number;
    dateCreation!: Date;
    marque!: Marque;
}