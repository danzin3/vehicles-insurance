import { IErrorResponse } from '../../interfaces';
import { HttpStatus } from '../../enums';
import { ErrorsMessages } from '../../constants';

export function buildNotFoundResponse(msg: string): IErrorResponse {
  return {
    statusCode: HttpStatus.NOT_FOUND,
    message: ErrorsMessages.RESOURCE_NOT_FOUND,
    response: {
      success: false,
      data: [
        {
          message: ErrorsMessages.notFound(msg),
          support: 'Support Email or whatsapp of organization',
        },
      ],
    },
  };
}
