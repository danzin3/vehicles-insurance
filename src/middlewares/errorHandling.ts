import { Response, NextFunction } from 'express';
import { IGlobalRequest, IErrorBody } from '../interfaces';
import { HttpStatus, Enviroments } from '../enums';
import { ErrorsMessages } from '../constants';
import { PinoLogger } from '../utils';
import env from '../configs/env';

const logger = PinoLogger.getInstance();

const handlerException = (
  exception: any,
  request: IGlobalRequest,
  response: Response,
  next: NextFunction,
) => {
  const req = {
    baseUrl: request.baseUrl,
    cookies: request.cookies,
    hostName: request.hostname,
    ipRequest: request.ip,
    originalUrl: request.originalUrl,
    params: request.params,
    protocol: request.protocol,
    queryParams: request.query,
    isHttp: request.secure,
    headers: request.headers,
  };

  if (!(env().application.environment === Enviroments.TESTING)) {
    logger.error({
      httpMethod: request.method,
      url: request.originalUrl,
      request: req,
      data: `${JSON.stringify(exception, null, 2)}`,
    });
  }

  if (
    typeof exception.statusCode === 'undefined' ||
    exception.statusCode === HttpStatus.INTERNAL_SERVER_ERROR
  ) {
    logger.genericError(exception);
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      data: [
        {
          message: ErrorsMessages.INTERNAL_SERVER_ERROR,
          support: 'Support email, Whatsapp or other contact way.',
        },
      ],
    } as IErrorBody);
  } else {
    response.status(exception.statusCode).json(exception);
  }
  next();
};

export { handlerException };
