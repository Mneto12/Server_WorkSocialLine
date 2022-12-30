import UserModel from "../model/userShchema";
import { UserRepository } from "../../domain/domainRepository";
import { UserEntity } from "../../domain/entity";
import { ObjectId } from "mongodb";

export class MongoRepository implements UserRepository {

async createUser(body:UserEntity): Promise<any> {
        const user = await UserModel.create(body);
        return user;
}

async getUsers(): Promise<any> {
        const users = await UserModel.find();
        return users;
}

async getUser(id: string): Promise<any> {
        const user = await UserModel.findById(id);
        return user;
}

async editUser(id: any, body: any): Promise<any> {
        const ID = {_id: new ObjectId(id)};
        const user = await UserModel.updateOne(ID,{$set: body});
        return user;
}

async deleteUser(id: string): Promise<any> {
        const ID = {_id: new ObjectId(id)};
        const user = await UserModel.deleteOne(ID);
        return user;
}

};