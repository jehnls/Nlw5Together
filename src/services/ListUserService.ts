import { getCustomRepository } from "typeorm";
import { User } from "@entities/User";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories);

    const users = await usersRepository.find();

    if (!users) {
      throw new Error("Users do not exists");
    }

    return classToPlain(users);
  }
}

export { ListUserService };
