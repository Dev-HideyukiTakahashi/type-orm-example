import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Vehicle {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  year: number;

  @ManyToOne(() => User, user => user.fleet, { onDelete: "CASCADE" })
  user: User
}