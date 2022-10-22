import 'reflect-metadata';
import 'dotenv/config';
import { checkEnvs, PinoLogger } from './utils';
import { Enviroments } from './enums';
import { app } from './configs/express';
import env from './configs/env';

const logger = PinoLogger.getInstance();
const port = env().application.port;

async function startApp() {
  try {
    await checkEnvs();
    //await AppDataSource.initialize();
    app.listen(port, () => {
      logger.genericLog(
        `All rigth, it's done! :) App is running on port: ${port}`,
      );
    });
  } catch (error) {
    logger.genericError(error);
    process.exit(1);
  }
}

if (env().application.environment !== Enviroments.TESTING) {
  startApp();
}

export { app };
