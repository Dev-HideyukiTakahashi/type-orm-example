import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

async function criarUsuario(user: User) {
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)
}

async function listarTodosUsuarios() {
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
    return users;
}

async function removerUsuario(user: User) {
    console.log("Deleting user from the database...")
    const users = await AppDataSource.manager.delete(User, user.id)
    console.log("User deleted: ", user)
}

async function removerUsuarioPeloNome(name: string) {
    console.log("Deleting user from the database with name... " + name)
    const usr = await AppDataSource.manager.findOneBy(User, {
        firstName: name
    });
    if (usr != null && usr.id > 0) {
        await removerUsuario(usr)
    }
}

AppDataSource.initialize().then(async () => {

    console.log("Creating a new user to be inserted into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    await criarUsuario(user);

    const allUsers = await listarTodosUsuarios();

    removerUsuarioPeloNome('Timber');

    // allUsers.forEach(u => removerUsuario(u));

    const timber = await AppDataSource.manager.findOneBy(User, { firstName: user.firstName });

}).catch(error => console.log(error))
