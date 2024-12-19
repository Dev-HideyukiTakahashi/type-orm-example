import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1734569981819 implements MigrationInterface {
    name = 'Initial1734569981819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar NOT NULL, "year" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "age" integer NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar NOT NULL, "year" integer NOT NULL, "userId" integer, CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_vehicle"("id", "description", "year", "userId") SELECT "id", "description", "year", "userId" FROM "vehicle"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`ALTER TABLE "temporary_vehicle" RENAME TO "vehicle"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" RENAME TO "temporary_vehicle"`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar NOT NULL, "year" integer NOT NULL, "userId" integer)`);
        await queryRunner.query(`INSERT INTO "vehicle"("id", "description", "year", "userId") SELECT "id", "description", "year", "userId" FROM "temporary_vehicle"`);
        await queryRunner.query(`DROP TABLE "temporary_vehicle"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
    }

}
