import { Router } from 'express';
import { RouteTags } from '../enums';
import { ClientController } from '../controllers/client.controller';
import { CreateClientReqValidade } from '../DTOs/client';
import env from '../configs/env';

const clientRouters = Router();
const clientController = new ClientController();
const prefix = env().application.prefix;

function initClientRouters() {
  clientRouters.post(
    `${prefix}/${RouteTags.CLIENTS}`,
    CreateClientReqValidade,
    clientController.createClient,
  );
}

initClientRouters();

export { clientRouters };
