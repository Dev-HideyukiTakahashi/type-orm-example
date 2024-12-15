import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1734229981691 implements MigrationInterface {
    name = 'Initial1734229981691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL, CONSTRAINT "UQ_58e4dbff0e1a32a9bdc861bb29e" UNIQUE ("firstName"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
