import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

export const UserRepository = AppDataSource.getRepository(User).extend({

  // busca customizada
  findByFirsAndLastName(firstName: string, lastName: string) {
    return this.createQueryBuilder("user")
      .where("user.firstName = :firstName and user.lastName = :lastName", { firstName, lastName })
      .getMany();
  }
});
