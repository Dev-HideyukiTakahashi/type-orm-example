import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm"

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

}
