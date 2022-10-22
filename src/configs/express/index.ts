import express from 'express';
import helmet from 'helmet';

//import { handlerException } from "../../middlewares/errorHandling";

const app = express();

function expressInitialization() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());

  /*app.use([
    authRouters,
    workServiceRouters,
    vehicleRouters,
    companyRouters,
    clientRouters,
    employeeRouters,
  ]);*/

  //app.use(handlerException);
}

expressInitialization();

export { app };
