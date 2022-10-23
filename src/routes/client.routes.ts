import { Router } from 'express';
import { RouteTags } from '../enums';
import { ClientController } from '../controllers/client.controller';
import { ClientBodyReqValidade } from '../DTOs/client';
import { isUuidV4Param } from '../middlewares';
import env from '../configs/env';

const clientRouters = Router();
const clientController = new ClientController();
const prefix = env().application.prefix;

function initClientRouters() {
  clientRouters.post(
    `${prefix}/${RouteTags.CLIENTS}`,
    ClientBodyReqValidade,
    clientController.createClient,
  );

  clientRouters.patch(
    `${prefix}/${RouteTags.CLIENTS}/:uuid`,
    isUuidV4Param,
    ClientBodyReqValidade,
    clientController.updateClient,
  );
}

initClientRouters();

export { clientRouters };
