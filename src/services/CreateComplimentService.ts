import { getCustomRepository } from "typeorm";
import { Compliment } from "@entities/Compliment";
import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";
import { UsersRepositories } from "@repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest): Promise<Compliment> {
    const complimentRepository = getCustomRepository(ComplimentsRepositories);
    const usersRepository = getCustomRepository(UsersRepositories);

    if (user_receiver === user_sender) {
      throw new Error("Incorrect User receiver");
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) {
      throw new Error("User receiver does not exists!");
    }

    const compliment = complimentRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
