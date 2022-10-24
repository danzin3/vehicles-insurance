import { MigrationInterface, QueryRunner, TableUnique } from 'typeorm';

export class setUniqueInExtraClient1666575026028 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createUniqueConstraint(
      'extra_clients',
      new TableUnique({
        name: 'UQ_client_id_relationship',
        columnNames: ['client_id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropUniqueConstraint(
      'extra_clients',
      new TableUnique({
        name: 'UQ_client_id_relationship',
        columnNames: ['client_id'],
      }),
    );
  }
}
