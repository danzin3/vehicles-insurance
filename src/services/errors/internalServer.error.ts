import { IErrorResponse } from '../../interfaces';
import { HttpStatus } from '../../enums';

export function buildInternalErrorResponse(msg: any): IErrorResponse {
  return {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: `${JSON.stringify(msg, null, 2)}`,
  };
}
