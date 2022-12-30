import { UserEntity } from "./entity";

export class UserValue implements UserEntity {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    birthDate: string;
    gender: string;

    constructor({username,firstname,lastname,email,password,phone,birthDate,gender}: {username: string, firstname: string, lastname: string, email: string, password: string, phone: string, birthDate: string, gender: string}) {

        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.birthDate = birthDate;
        this.gender = gender;

    }
}

// Valido los datos, no se a donde se envian pendiente!!