import { Pays } from "../pays";

export class Region {
    idRegion!: number;
    code_region!: string;
    nom!: string;
    domaineAct!: string;
    langue!: string;
    nb_population!: string;
    presentationRegion!: string;
    photoregion !: string;
    pays!: Pays;
    //commentaire!: Entite;

    // constructor(init : Partial<Region>){
    //     Object.assign(this, init)
    // }
}
