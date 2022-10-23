import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { handlerException, setInitDatetime } from '../../middlewares';
import { clientRouters } from '../../routes';
import env from '../env';

const app = express();

function expressInitialization() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(
    cors({
      origin: env().cors.clientsOrigin,
      methods: env().cors.methods,
      credentials: env().cors.credentials,
    }),
  );

  app.use(setInitDatetime);

  app.use([clientRouters]);

  app.use(handlerException);
}

expressInitialization();

export { app };
