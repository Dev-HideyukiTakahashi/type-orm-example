import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Vehicle } from "./entity/Vehicle"



export async function criarUsuario(user: User) {
  await AppDataSource.manager.save(user)
  console.log("Saved a new user with id: " + user.id)
}

export async function salvarVeiculo(vehicle: Vehicle) {
  await AppDataSource.manager.save(vehicle)
  console.log("Vehicle a new user with id: " + vehicle.id)
}

export async function listarTodosUsuarios() {
  console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)
  return users;
}

export async function listarTodosVeiculos() {
  console.log("Loading vehicles from the database...")
  const vehicles = await AppDataSource.manager.find(Vehicle)
  console.log("Loaded vehicles: ", vehicles)
  return vehicles;
}

export async function removerUsuario(user: User) {
  console.log("Deleting user from the database...")
  const users = await AppDataSource.manager.delete(User, user.id)
  console.log("User deleted: ", user)
}

export async function removerUsuarioPeloNome(name: string) {
  console.log("Deleting user from the database with name... " + name)
  const usr = await AppDataSource.manager.findOneBy(User, {
    firstName: name
  });
  if (usr != null && usr.id > 0) {
    await removerUsuario(usr)
  }
}
