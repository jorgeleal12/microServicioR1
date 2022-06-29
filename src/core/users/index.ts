
import { CreateUserUseCase } from "./applications/createUserUseCase";
import { CreateUserRepository } from "./infrastructure/createUserRepository";
import { CreateUserController } from "./infrastructure/controllers/createUserController";

const createUserRepository = new CreateUserRepository();
const createUserUseCase = new CreateUserUseCase(createUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };

