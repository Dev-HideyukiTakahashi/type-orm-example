import { Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm"
import { Vehicle } from "./Vehicle"

@Entity()
// @Unique(["firstName"])
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Vehicle, (vehicle) => vehicle.user, { cascade: true })
    fleet: Vehicle[]

}
