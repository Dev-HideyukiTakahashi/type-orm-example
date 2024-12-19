import { AppDataSource } from "./data-source"
import { criarUsuario, listarTodosUsuarios, listarTodosVeiculos, removerUsuario, removerUsuarioPeloNome, salvarVeiculo } from "./entity-manager"
import { User } from "./entity/User"
import { Vehicle } from "./entity/Vehicle"
import { buscarTodosUsuarios, buscarTodosUsuariosInnerJoin, buscarUsuarioPeloNome } from "./query-builder"
import { UserRepository } from "./repository"

async function queryBuilder() {
    const usr = await buscarUsuarioPeloNome("Timber");
    console.log("User")
    console.log(usr);
    // const usrs = await buscarTodosUsuarios();
    // console.log("All users")
    // console.log(usrs)
    const usrs = await buscarTodosUsuariosInnerJoin()
    console.log("All users with vehicle")
    console.log(usrs)
}

async function repository() {
    console.log("Buscando pelo nome")
    const usr = await UserRepository.findBy({ firstName: "Timber" });
    console.log(usr);

    console.log("Buscando pelo nome customizado")
    const usr2 = await UserRepository.findByFirsAndLastName("Timber", "Saw");
    console.log(usr2)
}

AppDataSource.initialize().then(async () => {

    console.log("Creating a new user to be inserted into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    // await criarUsuario(user);

    const allUsers = await listarTodosUsuarios();

    const timber = await AppDataSource.manager.findOneBy(User, { firstName: user.firstName });

    const vehicle = new Vehicle();
    vehicle.description = "Porsche 911 carrera"
    vehicle.year = 2020
    vehicle.user = timber

    // await salvarVeiculo(vehicle);

    await listarTodosVeiculos();

    // removerUsuarioPeloNome('Timber');

    // allUsers.forEach(u => removerUsuario(u));

    // console.log("----------With query-builder----------");
    // queryBuilder();

    console.log("----------With repository----------");
    repository();

}).catch(error => console.log(error))
