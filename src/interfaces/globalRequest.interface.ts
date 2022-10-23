import { Request } from 'express';

export interface IGlobalRequest extends Request {
  startDatetime: Date;
}
