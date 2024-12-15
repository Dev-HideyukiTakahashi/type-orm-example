import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Creating a new user to be inserted into the database...")
    const user = new User()
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25

    console.log("Verify if need to insert new record . . .")
    const timber = await AppDataSource.manager.findOneBy(User, { firstName: user.firstName });
    if (timber == null) {
        await AppDataSource.manager.save(user)
        console.log("Saved a new user with id: " + user.id)
    }

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
