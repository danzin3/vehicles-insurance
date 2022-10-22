import { IErrorResponse } from '../../interfaces';
import { HttpStatus } from '../../enums';
import { ErrorsMessages } from '../../constants';

export function buildForbiddenResponse(msg: string): IErrorResponse {
  return {
    statusCode: HttpStatus.FORBIDDEN,
    message: 'Without permission',
    response: {
      success: false,
      data: [
        {
          message: ErrorsMessages.permissionDenied(msg),
          support: 'Support Email or whatsapp of organization',
        },
      ],
    },
  };
}
