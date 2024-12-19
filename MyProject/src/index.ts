import { AppDataSource } from "./data-source"
import { criarUsuario, listarTodosUsuarios, listarTodosVeiculos, removerUsuarioPeloNome, salvarVeiculo } from "./entity-manager"
import { User } from "./entity/User"
import { Vehicle } from "./entity/Vehicle"

AppDataSource.initialize().then(async () => {

    console.log("Creating a new user to be inserted into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    await criarUsuario(user);

    const allUsers = await listarTodosUsuarios();

    const timber = await AppDataSource.manager.findOneBy(User, { firstName: user.firstName });

    const vehicle = new Vehicle();
    vehicle.description = "Porsche 911 carrera"
    vehicle.year = 2020
    vehicle.user = timber

    await salvarVeiculo(vehicle);

    await listarTodosVeiculos();

    removerUsuarioPeloNome('Timber');

    // allUsers.forEach(u => removerUsuario(u));



}).catch(error => console.log(error))
