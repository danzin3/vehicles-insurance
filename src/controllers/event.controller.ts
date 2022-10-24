import { HttpMethods, HttpStatus, RouteTags } from '../enums';
import { NextFunction, Response } from 'express';
import * as EventServices from '../services/event';
import { PinoLogger } from '../utils';
import { getTimingRequest } from '../helpers';
import { IGlobalRequest } from '../interfaces';
import env from '../configs/env';

const logger = PinoLogger.getInstance();
const baseUrl = env().application.baseUrl;
const prefix = env().application.prefix;

export class EventController {
  public createEvent = async (
    req: IGlobalRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const response = await EventServices.createEvent(req.body);
      res.status(HttpStatus.CREATED).json(response);
      logger.info({
        httpMethod: HttpMethods.POST,
        url: `${baseUrl}${prefix}/${RouteTags.EVENTS}`,
        timing: getTimingRequest(req.startDatetime),
      });
    } catch (error) {
      next(error);
    }
  };
}
