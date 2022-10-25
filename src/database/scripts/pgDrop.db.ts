/**
 * This works only for postgres database
 * For other database, others scripts should be created
 */

import { ClientConfig, Client } from 'pg';
import { checkEnvs } from '../../utils';
import { Enviroments } from '../../enums';
import { PinoLogger } from '../../utils';
import 'dotenv/config';

let databaseName: string;

const pgClientConfigs: ClientConfig = {
  user: process.env.DB_USER_NAME,
  host: process.env.BD_HOST,
  database: 'postgres',
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
};

let client = new Client(pgClientConfigs);
const logger = PinoLogger.getInstance();

const flag = process.argv.slice(2).toString();

async function enviroment() {
  await checkEnvs();
  switch (flag) {
    case Enviroments.DEVELOPMENT:
      databaseName = process.env.DATABASE_NAME;
      break;
    case Enviroments.TESTING:
      databaseName = process.env.DATABASE_TESTING;
      break;
    default:
      throw {
        message: 'Drop flag (dev or test) is necessary to this action',
      };
  }
}

async function startup() {
  logger.genericLog('--> Droping Database...');
  try {
    logger.genericLog('--> Checking Enviroments...');
    await enviroment();

    logger.genericLog('--> Connecting to the instance...');
    await client.connect();

    logger.genericLog('--> Executing the drop query command...');
    await client.query(`DROP DATABASE IF EXISTS "${databaseName}" (FORCE);`);
    await client.end();
    logger.genericLog(
      `--> Droping of database ${databaseName} was successfully Done!`,
    );
    process.exit(0);
  } catch (exception) {
    logger.genericError(exception);
    await client.end();
    process.exit(1);
  }
}

startup();
