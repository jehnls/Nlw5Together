import { getCustomRepository } from "typeorm";
import { Compliment } from "@entities/Compliment";
import { ComplimentsRepositories } from "@repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
  async execute(user_id: string): Promise<Compliment[]> {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories);
    console.log(user_id);

    const receiveCompliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
    });

    if (!receiveCompliments[0]) {
      throw new Error("User does not received compliments");
    }

    return receiveCompliments;
  }
}

export { ListUserReceiveComplimentsService };
