import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableExtraClients1666461014636
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'extra_clients',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'identity',
            isGenerated: true,
            generatedIdentity: 'ALWAYS',
          },
          {
            name: 'public_id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isNullable: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'client_id',
            type: 'int',
          },
          {
            name: 'is_actived',
            type: 'boolean',
            default: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'FK_Clients_to_Extra_Clients',
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('extra_clients');
  }
}
