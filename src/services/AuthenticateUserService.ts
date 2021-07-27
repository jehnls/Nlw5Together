import { compare } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "@repositories/UsersRepositories";
import { sign } from "jsonwebtoken";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({
    email,
    password,
  }: IAuthenticateUserRequest): Promise<string> {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      email,
    });

    if (!user.email) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign(
      {
        email: user.email,
      },
      "9f2ad26eb84806f3ed49f77b967b101b",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };
