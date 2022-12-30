import {Request, Response } from "express";
import { UserUseCase } from "../../application/useCases";

export class UserController {
    constructor(private userUseCase: UserUseCase){}

    public getUsers = async ({}: Request, res: Response) => {
        const users = await this.userUseCase.getUsers();
        res.send({users})
    }

    public getUser = async ({params}: Request, res: Response) => {
        const id: string = params?.id;
        const user = await this.userUseCase.getUser(id);
        res.send({user});
    }

    public createUser = async ({body}: Request, res: Response) => {
        const user = await this.userUseCase.createUser(body);
        res.send({user});
    }

    public editUser = async (req:Request, res: Response) => {
        const user = await this.userUseCase.editUser(req.params.id,req.body);
        res.send({user});
    }

    public deleteUser = async ({params}: Request, res: Response) => {
        const id: string = params?.id;
        const user = await this.userUseCase.deleteUser(id);
        res.send({user});
    }
}