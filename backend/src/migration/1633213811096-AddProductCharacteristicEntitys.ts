import {MigrationInterface, QueryRunner} from "typeorm";

export class AddProductCharacteristicEntitys1633213811096 implements MigrationInterface {
    name = 'AddProductCharacteristicEntitys1633213811096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "accessType" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cf9d140d6c3f2df1cf318d7e1f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" character varying NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productCharacteristic" ("id" character varying NOT NULL, "productId" character varying NOT NULL, "characteristicId" integer NOT NULL, "value" character varying NOT NULL, CONSTRAINT "PK_2b912538f97603ebae9c7eec562" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "characteristics" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a64133a287a0f2d735da40fcd89" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "accessTypeId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productCharacteristic" ADD CONSTRAINT "FK_3e9de7612c4244b11e49578df8e" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "productCharacteristic" ADD CONSTRAINT "FK_a69b88f348236858a991a92d768" FOREIGN KEY ("characteristicId") REFERENCES "characteristics"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_1d09fbfd7c0bd022878becafaac" FOREIGN KEY ("accessTypeId") REFERENCES "accessType"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_1d09fbfd7c0bd022878becafaac"`);
        await queryRunner.query(`ALTER TABLE "productCharacteristic" DROP CONSTRAINT "FK_a69b88f348236858a991a92d768"`);
        await queryRunner.query(`ALTER TABLE "productCharacteristic" DROP CONSTRAINT "FK_3e9de7612c4244b11e49578df8e"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "characteristics"`);
        await queryRunner.query(`DROP TABLE "productCharacteristic"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "accessType"`);
    }

}
