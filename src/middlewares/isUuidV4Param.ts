import { Response, NextFunction } from 'express';
import { IGlobalRequest, IErrorResponse } from '../interfaces';
import { HttpStatus } from '../enums';
import { ErrorsMessages, Regex } from '../constants';

const isUuidV4Param = async (
  request: IGlobalRequest,
  response: Response,
  next: NextFunction,
) => {
  const idParam = request.params.uuid;

  if (!idParam.match(Regex.isUUIDv4)) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: ErrorsMessages.NOT_UUID_V4_ERROR,
      response: {
        success: false,
        data: [{ message: ErrorsMessages.invalidParams('UUID Url param') }],
      },
    } as IErrorResponse);
  }

  next();
};

export { isUuidV4Param };
