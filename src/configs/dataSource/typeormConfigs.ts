import { DataSourceOptions } from 'typeorm';
import { Enviroments } from '../../enums';
import env from '../env';

export const ormConfigs: DataSourceOptions = {
  type: 'postgres',
  host: env().database.host,
  port: env().database.port,
  username: env().database.username,
  password: env().database.password,
  schema: env().database.schema,
  database: env().database.dbName,
  logging: false,
  synchronize: false,
  entities: ['src/database/entities/*.entity.ts'],
  subscribers: ['src/database/subscribers/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  uuidExtension: 'uuid-ossp',
};
