import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableVehicles1666458907960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'vehicles',
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
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'code',
            type: 'varchar',
            length: '45',
            isUnique: true,
            isNullable: true,
          },
          {
            name: 'vehicle_type',
            type: 'enum',
            enum: ['carro', 'motocicleta', 'caminhao', 'outro'],
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
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
