import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableEvents1666459421099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'events',
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
            name: 'vehicle_id',
            type: 'int',
          },
          {
            name: 'client_id',
            type: 'int',
          },
          {
            name: 'event_type',
            type: 'enum',
            enum: ['accident', 'outro'],
          },
          {
            name: 'when_happened',
            type: 'date',
          },
          {
            name: 'loss_amount',
            type: 'decimal(16,2)',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'enum',
            enum: ['pending', 'in-progress', 'resolved'],
            isNullable: true,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
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
            name: 'FK_Clients_to_Events',
            referencedTableName: 'clients',
            referencedColumnNames: ['id'],
            columnNames: ['client_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'FK_Vehicles_to_Events',
            referencedTableName: 'vehicles',
            referencedColumnNames: ['id'],
            columnNames: ['vehicle_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('events');
  }
}
