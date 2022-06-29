
import { IcreateUserRepository} from "../infrastructure/icreateUserRepository";

export class CreateUserUseCase {
  constructor( private icreateUserRepository: IcreateUserRepository) {}

  async createUser() {
    return await this.icreateUserRepository.createUser();
  }
}

