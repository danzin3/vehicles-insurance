import 'reflect-metadata';
import 'dotenv/config';
import { checkEnvs, PinoLogger } from './utils';
import { AppDataSource } from './configs/dataSource';
import { Enviroments } from './enums';
import swaggerUi from 'swagger-ui-express';
import * as swaggerConfigs from './configs/docs';
import { app } from './configs/express';
import env from './configs/env';

const logger = PinoLogger.getInstance();
const port = env().application.port;

async function startApp() {
  try {
    await checkEnvs();
    await AppDataSource.initialize();
    app.use('/docs', swaggerUi.serve);
    app.use(
      '/docs',
      swaggerUi.setup(swaggerConfigs.docs, swaggerConfigs.options),
    );
    app.listen(port, () => {
      logger.genericLog(
        `All rigth, it's done! :) Application is running on port: ${port}`,
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
