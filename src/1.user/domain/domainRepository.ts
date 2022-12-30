import { UserEntity } from "./entity";

export interface UserRepository {
    createUser(user:UserEntity): Promise<UserEntity | null>;
    getUsers(): Promise<UserEntity[] | null>;
    getUser(id: string): Promise<UserEntity | null>;
    editUser(id: string, user:UserEntity): Promise<UserEntity | null>;
    deleteUser(id: string): Promise<any>;
}