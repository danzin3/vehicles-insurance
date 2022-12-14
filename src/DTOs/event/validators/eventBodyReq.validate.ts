import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateEventReqDTO } from '../createEventReq.dto';
import { IErrorResponse } from '../../../interfaces';
import { ErrorsMessages } from '../../../constants';
import { getClassValidatorErrors, objectShapeValidate } from '../../../helpers';
import { HttpStatus, Enviroments } from '../../../enums';
import { PinoLogger } from '../../../utils';
import env from '../../../configs/env';
import { SimpleConsoleLogger } from 'typeorm';

const logger = PinoLogger.getInstance();
const isTest = env().application.environment === Enviroments.TESTING;

const EventBodyReqValidade = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const event = plainToClass(CreateEventReqDTO, request.body);

  if (
    !objectShapeValidate(
      [
        'client',
        'extraClients',
        'vehicle',
        'eventType',
        'whenHappened',
        'lossAmount',
        'status',
        'description',
      ],
      event,
    )
  ) {
    if (!isTest) {
      logger.error({
        httpMethod: request.method,
        url: request.originalUrl,
        data: {
          message: ErrorsMessages.invalidParams(
            'Shape of object in body request',
          ),
        },
      });
    }
    return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: ErrorsMessages.invalidParams('Shape of object in body request'),
      response: {
        success: false,
        data: [
          {
            message: ErrorsMessages.invalidParams(
              'Shape of object in body request',
            ),
          },
        ],
      },
    } as IErrorResponse);
  }
  validate(event, { skipMissingProperties: true }).then((errors) => {
    if (errors.length) {
      if (!isTest) {
        logger.error({
          httpMethod: request.method,
          url: request.originalUrl,
          data: {
            message: ErrorsMessages.invalidParams('Body Params'),
          },
        });
      }

      let errorMessages = [];

      const childrenSanatize = errors.filter(
        (error) => error.children.length === 0,
      );

      errorMessages = getClassValidatorErrors(childrenSanatize);

      errors.forEach((error) => {
        if (error.children.length) {
          for (let constraintKey in error.children.at(0).constraints) {
            errorMessages.push({
              message: `${
                error.children.at(0).constraints[constraintKey]
              } at '${error.property}' field`,
            });
          }
        }
      });

      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: ErrorsMessages.invalidParams('Body Params'),
        response: {
          success: false,
          data: errorMessages,
        },
      } as IErrorResponse);
    } else {
      next();
    }
  });
};

export { EventBodyReqValidade };
