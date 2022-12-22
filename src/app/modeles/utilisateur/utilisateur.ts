import { Role } from "../role/role";


export class Utilisateur {
    iduser!:number;
    username!:String;
    email!:String;
    password!:String;
    role!: Role; 
}
 