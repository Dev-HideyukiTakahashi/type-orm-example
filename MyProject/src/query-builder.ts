import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

export async function buscarUsuarioPeloNome(name: string) {
  console.log("Searching user from db with name " + name);
  const usr = await AppDataSource.createQueryBuilder(User, "user") // recebe a classe e o alias
    .where("user.firstName = :name", { name })
    .getOne();

  return usr;
}

export async function buscarTodosUsuarios() {
  console.log("Searching all users from db");
  const usrs = await AppDataSource.createQueryBuilder(User, "user")
    .leftJoinAndSelect("user.fleet", "vehicle") // leftjoin recebe inclusive com vehicle vazio []
    .where("user.firstName = :name", { name: "Timber" })
    .getMany();

  return usrs;
}

export async function buscarTodosUsuariosInnerJoin() {
  console.log("Searching all users from db");
  const usrs = await AppDataSource.createQueryBuilder(User, "user")
    .innerJoinAndSelect("user.fleet", "vehicle") // inner join recebe apenas se tiver vehicle
    .getMany();

  return usrs;
}