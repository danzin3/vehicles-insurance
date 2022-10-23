import { HttpMethods, HttpStatus, RouteTags } from '../enums';
import { NextFunction, Response } from 'express';
import * as ClientServices from '../services/client';
import { PinoLogger } from '../utils';
import { getTimingRequest } from '../helpers';
import { IGlobalRequest } from '../interfaces';
import env from '../configs/env';

const logger = PinoLogger.getInstance();
const baseUrl = env().application.baseUrl;
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
      logger.info({
        httpMethod: HttpMethods.POST,
        url: `${baseUrl}${prefix}/${RouteTags.CLIENTS}`,
        timing: getTimingRequest(req.startDatetime),
      });
    } catch (error) {
      next(error);
    }
  };

  public updateClient = async (
    req: IGlobalRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const clientId = req.params.uuid;
      const response = await ClientServices.updateClient(req.body, clientId);
      res.status(HttpStatus.OK).json(response);
      logger.info({
        httpMethod: HttpMethods.PATCH,
        url: `${baseUrl}${prefix}/${RouteTags.CLIENTS}/${clientId}`,
        timing: getTimingRequest(req.startDatetime),
      });
    } catch (error) {
      next(error);
    }
  };

  public getClientById = async (
    req: IGlobalRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const clientId = req.params.uuid;
      const response = await ClientServices.getClientById(clientId);
      res.status(HttpStatus.OK).json(response);
      logger.info({
        httpMethod: HttpMethods.GET,
        url: `${baseUrl}${prefix}/${RouteTags.CLIENTS}/${clientId}`,
        timing: getTimingRequest(req.startDatetime),
      });
    } catch (error) {
      next(error);
    }
  };

  public deleteClient = async (
    req: IGlobalRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const clientId = req.params.uuid;
      const response = await ClientServices.deleteClient(clientId);
      res.status(HttpStatus.OK).json(response);
      logger.info({
        httpMethod: HttpMethods.DELETE,
        url: `${baseUrl}${prefix}/${RouteTags.CLIENTS}/${clientId}`,
        timing: getTimingRequest(req.startDatetime),
      });
    } catch (error) {
      next(error);
    }
  };
}
