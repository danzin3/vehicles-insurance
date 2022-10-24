import { Router } from 'express';
import { RouteTags } from '../enums';
import { EventController } from '../controllers/event.controller';
import { EventBodyReqValidade } from '../DTOs/event';
import { isUuidV4Param } from '../middlewares';
import env from '../configs/env';

const eventRouters = Router();
const eventController = new EventController();
const prefix = env().application.prefix;

function initEventRouters() {
  eventRouters.post(
    `${prefix}/${RouteTags.EVENTS}`,
    EventBodyReqValidade,
    eventController.createEvent,
  );
}

initEventRouters();

export { eventRouters };
