import { getCustomRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentRepository = getCustomRepository(ComplimentsRepositories);

    const complimentSend = await complimentRepository.find({
      where: {
        user_sender: user_id,
      },
    });

    if (!complimentSend[0]) {
      throw new Error("User does not send compliments");
    }

    return complimentSend;
  }
}

export { ListUserSendComplimentsService };
