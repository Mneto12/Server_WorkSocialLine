import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserUseCase } from "../../application/useCases";
import { MongoRepository } from "../repository/mongoRepository";

const route = Router();
const userRepo = new MongoRepository
const userUseCase = new UserUseCase(userRepo);
const userController = new UserController(userUseCase);

// ROUTES
// ---------------------------------------
route.get('/user', userController.getUsers);
route.get('/user/:id', userController.getUser);
route.put('/user/:id', userController.editUser)
route.post('/user',userController.createUser);
route.delete('/user/:id',userController.deleteUser);

export default route