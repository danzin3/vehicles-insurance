import express from 'express';
import helmet from 'helmet';
import { handlerException } from '../../middlewares';
import { clientRouters } from '../../routes';

const app = express();

function expressInitialization() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());

  app.use([clientRouters]);

  app.use(handlerException);
}

expressInitialization();

export { app };
