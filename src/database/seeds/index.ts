import { AppDataSource } from '../../configs/dataSource';
import { checkEnvs } from '../../utils';
import { PinoLogger } from '../../utils';
import { vehicles } from './data';

const logger = PinoLogger.getInstance();

async function insertVehicles() {
  const sql = `
    INSERT INTO "vehicles" (name, code, vehicle_type, description)
    VALUES ($1,$2,$3,$4);
  `;
  await Promise.all(
    vehicles.map((item) => {
      return AppDataSource.query(sql, [
        item.name,
        item.code,
        item.vehicle_type,
        item.description,
      ]);
    }),
  );
}

async function startup() {
  logger.genericLog('--> Creating Seeds on database...');
  try {
    await AppDataSource.driver.connect();
    logger.genericLog('--> Checking Enviroments...');
    await checkEnvs();

    logger.genericLog('--> Inserting Vehicles');
    await insertVehicles();

    await AppDataSource.driver.disconnect();

    logger.genericLog('--> Seeds creation was successfully Done!');

    process.exit(0);
  } catch (exception) {
    await AppDataSource.driver.disconnect();
    logger.genericError(exception);
    process.exit(1);
  }
}

startup();
