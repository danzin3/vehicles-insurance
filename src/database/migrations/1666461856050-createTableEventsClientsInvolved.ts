import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableEventsClientsInvolved1666461856050
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events_clients_involved',
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
            name: 'event_id',
            type: 'int',
          },
          {
            name: 'extra_client_id',
            type: 'int',
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
            name: 'FK_Events_to_Events_Clients_Involved',
            referencedTableName: 'events',
            referencedColumnNames: ['id'],
            columnNames: ['event_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'FK_Extra_Clients_to_Events_Clients_Involved',
            referencedTableName: 'extra_clients',
            referencedColumnNames: ['id'],
            columnNames: ['extra_client_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events_clients_involved');
  }
}
