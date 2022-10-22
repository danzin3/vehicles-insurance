import { HttpMethods, HttpStatus, RouteTags } from '../enums';
import { NextFunction, Response } from 'express';
import * as ClientServices from '../services/client';
import { PinoLogger } from '../utils';
import { IGlobalRequest } from '../interfaces';
import env from '../configs/env';

const logger = PinoLogger.getInstance();
const prefix = env().application.prefix;

export class ClientController {
  public createClient = async (
    req: IGlobalRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const response = await ClientServices.createClient(req.body);
      res.status(HttpStatus.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  };
}
