import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUserAndAccessTypeEntitys1632490761235 implements MigrationInterface {
    name = 'CreateUserAndAccessTypeEntitys1632490761235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "AccessType" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_dbff849a720bbcaaad5a2e63d42" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "accessTypeId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1d09fbfd7c0bd022878becafaac" FOREIGN KEY ("accessTypeId") REFERENCES "AccessType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1d09fbfd7c0bd022878becafaac"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "AccessType"`);
    }

}
