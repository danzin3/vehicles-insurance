import { IDefaultResponse } from '../../interfaces';
import { Event } from '../../database/entities';

export class SingleEventResDTO implements IDefaultResponse<Event> {
  statusCode: number;
  message: string;
  response: {
    success: boolean;
    data: Event;
  };
}
