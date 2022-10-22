import express from 'express';
import helmet from 'helmet';

import { handlerException } from '../../middlewares';

const app = express();

function expressInitialization() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  // Routes of the project
  app.use(handlerException);
}

expressInitialization();

export { app };
