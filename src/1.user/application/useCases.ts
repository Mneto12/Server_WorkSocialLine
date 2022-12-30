import { UserRepository } from "../domain/domainRepository";
import { UserValue } from "../domain/user.value";

export class UserUseCase {
    constructor(private readonly userRepository: UserRepository) {}

    public createUser = async ({username,firstname,lastname,email,password,phone,birthDate,gender}: any) => {
        const userValue = new UserValue({username,firstname,lastname,email,password,phone,birthDate,gender})
        const userAdd = await this.userRepository.createUser(userValue)
        return userAdd
    }

    public getUsers = async () => {
        const users = await this.userRepository.getUsers();
        return users;
    }

    public getUser = async (id: any) => {
        const user = await this.userRepository.getUser(id);
        return user;
    }

    public editUser = async (id: any,body: any) => {
        const user = await this.userRepository.editUser(id,body)
        return user;
    }

    public deleteUser = async (id: any) => {
        const user = await this.userRepository.deleteUser(id);
        return user;
    }
}