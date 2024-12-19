import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Vehicle } from "./entity/Vehicle"
import { Initial1734569981819 } from "./migration/1734569981819-initial"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: "all",
    entities: [User, Vehicle],
    migrations: [Initial1734569981819],
    subscribers: [],
})
