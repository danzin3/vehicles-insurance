import { DataSource } from 'typeorm';
import { ormConfigs } from './typeormConfigs';

export const AppDataSource = new DataSource(ormConfigs);
