import { getCustomRepository } from "typeorm";
import { Tag } from "@entities/Tag";
import { TagsRepositories } from "@repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    if (!tags) {
      throw new Error("It were not created tags");
    }

    return classToPlain(tags);
  }
}

export { ListTagsService };
